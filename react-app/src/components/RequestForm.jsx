import React, { useState, useEffect } from 'react'

export default function RequestForm({ credits = [], onSubmit }){
  const defaultValues = {
    name: '', idNumber: '', email: '', phone: '', product: credits[0]?.id || '', amount: '', term: '12', destination: '', company: '', position: '', income: ''
  }

  const [values, setValues] = useState(defaultValues)
  const [errors, setErrors] = useState({})
  const [monthly, setMonthly] = useState(0)
  const [success, setSuccess] = useState('')

  useEffect(()=>{
    // calculate monthly payment when product, amount or term change
    const product = credits.find(c=>c.id === values.product)
    const amount = Number(String(values.amount).replace(/[^0-9.]/g,'')) || 0
    const n = Number(values.term) || 0
    let r = 0
    if(product && product.rateMonthly){
      r = Number(String(product.rateMonthly).replace('%',''))/100
    }

    let m = 0
    if(n>0){
      if(r>0){
        // standard annuity formula
        const rate = r
        m = amount * rate / (1 - Math.pow(1+rate, -n))
      } else {
        m = amount / n
      }
    }
    setMonthly(m)
  },[values.product, values.amount, values.term, credits])

  function handleChange(e){
    const { name, value } = e.target
    setValues(v=>({ ...v, [name]: value }))

    // real-time validation for some fields
    if(name === 'email'){
      setErrors(err=>({ ...err, email: (/^\S+@\S+\.\S+$/.test(value) ? '' : 'Email inválido') }))
    }
    if(name === 'name'){
      setErrors(err=>({ ...err, name: value.trim() ? '' : 'Nombre requerido' }))
    }
    if(name === 'amount'){
      setErrors(err=>({ ...err, amount: (Number(value) > 0 ? '' : 'Monto debe ser mayor que 0') }))
    }
  }

  function validateAll(){
    const e = {}
    if(!values.name.trim()) e.name = 'Nombre requerido'
    if(!values.idNumber.trim()) e.idNumber = 'Cédula requerida'
    if(!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Email inválido'
    if(!values.amount || Number(values.amount) <=0) e.amount = 'Monto inválido'
    if(!values.term) e.term = 'Plazo requerido'
    if(!values.product) e.product = 'Seleccione un tipo de crédito'
    if(!values.income || Number(values.income) <= 0) e.income = 'Ingresos inválidos'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!validateAll()) return

    const product = credits.find(c=>c.id === values.product)
    const submission = {
      timestamp: new Date().toISOString(),
      name: values.name,
      idNumber: values.idNumber,
      email: values.email,
      phone: values.phone,
      product: product?.name || values.product,
      amount: Number(String(values.amount).replace(/[^0-9.]/g,'')) || 0,
      term: Number(values.term)||0,
      destination: values.destination,
      company: values.company,
      position: values.position,
      income: Number(String(values.income).replace(/[^0-9.]/g,'')) || 0,
      monthlyPayment: monthly
    }

    if(typeof onSubmit === 'function') onSubmit(submission)
    setSuccess('Solicitud enviada con éxito')
    // clear form
    setValues(defaultValues)
    setErrors({})
    // hide success after 3s
    setTimeout(()=>setSuccess(''),3000)
  }

  const fmt = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })

  return (
    <form className="credit-form" onSubmit={handleSubmit} noValidate>
      <fieldset>
        <legend>Datos Personales</legend>
        <label>Nombre completo<input name="name" value={values.name} onChange={handleChange} /></label>
        {errors.name && <div className="field-error">{errors.name}</div>}

        <label>Cédula<input name="idNumber" value={values.idNumber} onChange={handleChange} /></label>
        {errors.idNumber && <div className="field-error">{errors.idNumber}</div>}

        <label>Email<input name="email" type="email" value={values.email} onChange={handleChange} /></label>
        {errors.email && <div className="field-error">{errors.email}</div>}

        <label>Teléfono<input name="phone" value={values.phone} onChange={handleChange} /></label>
      </fieldset>

      <fieldset>
        <legend>Datos del Crédito</legend>
        <label>Tipo de crédito
          <select name="product" value={values.product} onChange={handleChange}>
            <option value="">-- Seleccione --</option>
            {credits.map(c=> (<option key={c.id} value={c.id}>{c.name}</option>))}
          </select>
        </label>
        {errors.product && <div className="field-error">{errors.product}</div>}

        <label>Monto solicitado<input name="amount" type="number" value={values.amount} onChange={handleChange} /></label>
        {errors.amount && <div className="field-error">{errors.amount}</div>}

        <label>Plazo (meses)
          <select name="term" value={values.term} onChange={handleChange}>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
            <option value="60">60</option>
          </select>
        </label>

        <label>Destino del crédito<textarea name="destination" value={values.destination} onChange={handleChange}></textarea></label>
      </fieldset>

      <fieldset>
        <legend>Datos Laborales</legend>
        <label>Empresa donde trabaja<input name="company" value={values.company} onChange={handleChange} /></label>
        <label>Cargo<input name="position" value={values.position} onChange={handleChange} /></label>
        <label>Ingresos mensuales<input name="income" type="number" value={values.income} onChange={handleChange} /></label>
        {errors.income && <div className="field-error">{errors.income}</div>}
        </fieldset>

        <div className="form-summary">
            <h4>Resumen</h4>
            <p>Producto: <strong>{credits.find(c=>c.id===values.product)?.name || '-'}</strong></p>
            <p>Monto: <strong>{values.amount ? fmt.format(Number(String(values.amount).replace(/[^0-9.]/g,''))) : '-'}</strong> | Plazo: <strong>{values.term} meses</strong></p>
            <p>Cuota estimada mensual: <strong>{monthly>0 ? fmt.format(monthly) : '-'}</strong></p>
          </div>

      <div className="form-actions">
        <button className="btn primary" type="submit">Enviar Solicitud</button>
        <button className="btn" type="reset" onClick={()=>{ setValues(defaultValues); setErrors({}) }}>Limpiar Formulario</button>
      </div>

      {success && <div className="form-success">{success}</div>}
    </form>
  )
}
