import React from 'react'

export default function CreditCard({ data }){
  const { name, icon, description, rateMonthly, rateEA, minAmount, maxAmount, maxTerm, requirements } = data
  const fmt = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })
  return (
    <article className="credit-card">
      <div className="card-header">
        <span className="icon" aria-hidden>{icon}</span>
        <h3>{name}</h3>
      </div>

      <p className="card-desc"><strong>Descripción:</strong> {description}</p>

      <div className="detalles">
        <div className="detalle-item"><span className="label">Tasa:</span><span className="value rate">{rateMonthly} mensual ({rateEA} E.A.)</span></div>
        <div className="detalle-item"><span className="label">Monto:</span><span className="value">{fmt.format(Number(String(minAmount).replace(/[^0-9]/g,'')))} - {fmt.format(Number(String(maxAmount).replace(/[^0-9]/g,'')))}</span></div>
        <div className="detalle-item"><span className="label">Plazo max.:</span><span className="value">{maxTerm} meses</span></div>
        <div className="detalle-item requisitos"><span className="label">Requisitos:</span><span className="value">{requirements}</span></div>
      </div>

      <div className="card-actions">
        <button className="btn primary" onClick={()=>alert('Ir a formulario (simulado)')}>Solicitar</button>
      </div>
    </article>
  )
}
