import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="navbar sticky">
      <div className="container nav-inner">
        <div className="brand">
          <img src="/IMG/tarjeta-de-visita.png" alt="CrediSmart" />
          <h1>CrediSmart</h1>
        </div>
        <div className="menu">
          <NavLink to="/" end className={({isActive})=> isActive? 'active' : ''}>Inicio</NavLink>
          <NavLink to="/simulador" className={({isActive})=> isActive? 'active' : ''}>Simulador</NavLink>
          <NavLink to="/solicitar" className={({isActive})=> isActive? 'active' : ''}>Solicitar</NavLink>
        </div>
      </div>
    </nav>
  )
}
