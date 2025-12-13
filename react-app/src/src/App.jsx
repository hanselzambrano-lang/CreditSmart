import React, { useState, useMemo } from 'react'
import credits from './data/credits'
import CreditCard from './components/CreditCard'
import RequestForm from './components/RequestForm'

function parseAmount(str){
  if(!str) return 0
  const n = Number(String(str).replace(/[^0-9]/g, ''))
  return isNaN(n) ? 0 : n
}

function parseRate(str){
  if(!str) return 0
  const n = Number(String(str).replace(/[^0-9\.]/g, ''))
  return isNaN(n) ? 0 : n
}

export default function App(){
  const [query, setQuery] = useState('')
  const [amountRange, setAmountRange] = useState('all')
  const [sortOrder, setSortOrder] = useState('none') // 'asc' or 'desc' or 'none'
  const [view, setView] = useState('catalog') // 'catalog' | 'form'
  const [submissions, setSubmissions] = useState([])

  const ranges = {
    all: { label: 'Todos los rangos' },
    small: { label: 'Hasta $5.000.000', min: 0, max: 5000000 },
    mid: { label: '$5.000.000 - $20.000.000', min: 5000000, max: 20000000 },
    large: { label: 'Más de $20.000.000', min: 20000000, max: Infinity }
  }

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase()
    const list = credits.filter(c=>{
      // search by name
      if(q && !c.name.toLowerCase().includes(q)) return false

      // amount range filter
      const min = parseAmount(c.minAmount)
      const max = parseAmount(c.maxAmount)
      const range = ranges[amountRange]
      if(range && range.min !== undefined){
        // check overlap between product range and selected range
        if(max < range.min) return false
        if(min > (range.max || Infinity)) return false
      }

      return true
    })

    // sort by monthly rate if requested
    if(sortOrder === 'asc' || sortOrder === 'desc'){
      list.sort((a,b)=>{
        const ra = parseRate(a.rateMonthly)
        const rb = parseRate(b.rateMonthly)
        return sortOrder === 'asc' ? ra - rb : rb - ra
      })
    }

    return list
  },[query, amountRange, sortOrder])

  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <img src="/IMG/tarjeta-de-visita.png" alt="CrediSmart logo" />
          <h1>CrediSmart</h1>
        </div>
        <nav className="top-nav">
          <button className={`nav-btn ${view==='catalog'?'active':''}`} onClick={()=>setView('catalog')}>Catálogo</button>
          <button className={`nav-btn ${view==='form'?'active':''}`} onClick={()=>setView('form')}>Solicitar Crédito</button>
        </nav>
      </header>

      <main className="container">
        {view === 'catalog' && (
          <section className="credits-section">
            <h2>Productos Crediticios</h2>

            <div className="simulator-controls">
              <input
                className="search-input"
                type="search"
                placeholder="Buscar por nombre de producto..."
                value={query}
                onChange={e=>setQuery(e.target.value)}
                aria-label="Buscar créditos"
              />

              <select className="filter-select" value={amountRange} onChange={e=>setAmountRange(e.target.value)}>
                {Object.entries(ranges).map(([key,{label}])=> (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>

              <select className="filter-select" value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
                <option value="none">Orden: predeterminado</option>
                <option value="asc">Tasa: menor a mayor</option>
                <option value="desc">Tasa: mayor a menor</option>
              </select>
            </div>

            <div className="credits-grid">
              {filtered.length === 0 && (
                <p className="no-results">No hay créditos disponibles según los criterios.</p>
              )}

              {filtered.map((c) => (
                <CreditCard key={c.id} data={c} />
              ))}
            </div>
          </section>
        )}

        {view === 'form' && (
          <section className="form-section">
            <h2>Solicitar Crédito</h2>
            <RequestForm credits={credits} onSubmit={(s)=>{
              setSubmissions(prev=>[s,...prev])
            }} />
            <div className="submissions-list">
              {submissions.length>0 && <>
                <h3>Solicitudes recientes (memoria)</h3>
                <ul>
                  {submissions.map((s,idx)=>(<li key={idx}>{s.product} — ${s.amount} — ${s.monthlyPayment?.toFixed(0)}</li>))}
                </ul>
              </>}
            </div>
          </section>
        )}
      </main>

      <footer className="app-footer">
        <p>CreditSmart — Ejemplo React | Datos en memoria</p>
      </footer>
    </div>
  )
}
