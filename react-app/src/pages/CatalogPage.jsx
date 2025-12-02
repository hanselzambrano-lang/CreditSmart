import React from 'react'
import credits from '../data/credits'
import CreditCard from '../components/CreditCard'

export default function CatalogPage(){
  return (
    <main className="container">
      <section className="credits-section">
        <h2>Productos Crediticios</h2>
        <div className="credits-grid">
          {credits.map(c => <CreditCard key={c.id} data={c} />)}
        </div>
      </section>
    </main>
  )
}
