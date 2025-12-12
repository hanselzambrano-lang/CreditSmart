import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore'

export default function MyRequestsPage({ email }){
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(()=>{
    const fetchRequests = async ()=>{
      if(!email){
        setRequests([])
        return
      }
      if(!db){
        setError('Firestore no configurado')
        return
      }
      setLoading(true)
      try{
        const q = query(collection(db,'requests'), where('email','==', email), orderBy('createdAt','desc'))
        const snap = await getDocs(q)
        setRequests(snap.docs.map(d=>({ id: d.id, ...d.data() })))
      }catch(err){
        console.error('Error fetching requests', err)
        setError('No se pudieron cargar las solicitudes')
      }finally{
        setLoading(false)
      }
    }
    fetchRequests()
  },[email])

  if(loading) return <div>Cargando solicitudes...</div>
  if(error) return <div className="field-error">{error}</div>

  return (
    <section className="requests-list container">
      <h2>Mis Solicitudes</h2>
      {requests.length === 0 && <p>No hay solicitudes registradas.</p>}
      <ul>
        {requests.map(r=> (
          <li key={r.id} className="request-item">
            <strong>{r.product}</strong> — {r.amount} COP — {r.term} meses
            <div className="muted">{new Date(r.createdAt?.seconds ? r.createdAt.seconds*1000 : r.timestamp || Date.now()).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
