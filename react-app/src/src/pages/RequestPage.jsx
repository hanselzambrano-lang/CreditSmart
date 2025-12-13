import React, { useState } from 'react'
import RequestForm from '../components/RequestForm'

export default function RequestPage(){
  const [submissions, setSubmissions] = useState([])
  return (
    <main className="container">
      <section className="form-section">
        <h2>Solicitar Crédito</h2>
        <RequestForm credits={[]} onSubmit={(s)=> setSubmissions(prev=>[s,...prev])} />
        {submissions.length>0 && (
          <div className="submissions-list">
            <h3>Solicitudes recientes (memoria)</h3>
            <ul>
              {submissions.map((s,idx)=> (<li key={idx}>{s.product} — {s.amount} — {s.monthlyPayment?.toFixed(0)}</li>))}
            </ul>
          </div>
        )}
      </section>
    </main>
  )
}
