import React from 'react'
import credits from './data/credits'
import CreditCard from './components/CreditCard'

export default function App(){
  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <img src="/IMG/tarjeta-de-visita.png" alt="CrediSmart logo" />
          <h1>CrediSmart - Catálogo</h1>
        </div>
      </header>

      <main className="container">
        <section className="credits-section">
          <h2>Productos Crediticios</h2>
          <div className="credits-grid">
            {credits.map((c) => (
              <CreditCard key={c.id} data={c} />
            ))}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>CreditSmart — Ejemplo React | Datos en memoria</p>
      </footer>
    </div>
  )
}
