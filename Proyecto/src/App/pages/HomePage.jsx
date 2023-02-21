import { NavLink } from "react-router-dom"

export const HomePage = () => {
  return (
    <>
    <h1>HomePage</h1>

    <div className="card">
        
      <NavLink
        to="/contador">
        <button
          className="btn btn-outline-warning btn-lg mb-2"
          aria-label="Contador"
        >
          Contador
        </button>
      </NavLink>
      <NavLink
        to="/formulario">
        <button
          className="btn btn-outline-warning btn-lg mb-2"
          aria-label="Contador"
        >
          Formulario
        </button>
      </NavLink>
    </div>

    </>
  )
}
