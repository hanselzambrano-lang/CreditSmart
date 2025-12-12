import React, { useEffect, useState } from 'react'
import creditsFallback from '../data/credits'
import CreditCard from '../components/CreditCard'
import { db } from '../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function CatalogPage(){
  const [credits, setCredits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(()=>{
    const fetchCredits = async ()=>{
      // If Firestore is configured (db !== null) try to load from cloud
      if(db){
        setLoading(true)
        try{
          const snap = await getDocs(collection(db,'credits'))
          const items = snap.docs.map(d=>({ id: d.id, ...d.data() }))
          setCredits(items)
        }catch(err){
          console.error('Error loading credits from Firestore', err)
          setError('No se pudieron cargar los créditos desde la nube. Cargando localmente...')
          // fallback to local file
          setCredits(creditsFallback)
        }finally{
          setLoading(false)
        }
      } else {
        // No Firebase configured: use local data
        setCredits(creditsFallback)
        setLoading(false)
      }
    }
    fetchCredits()
  },[])

  return (
    <main className="container">
      <section className="credits-section">
        <h2>Productos Crediticios</h2>
        {loading && <div>Loading créditos...</div>}
        {error && <div className="field-error">{error}</div>}
        <div className="credits-grid">
          {credits.map(c => <CreditCard key={c.id} data={c} />)}
        </div>
      </section>
    </main>
  )
}
