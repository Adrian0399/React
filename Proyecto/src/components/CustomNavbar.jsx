import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function CustomNavbar() {

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true
    });
  }

  return (
    <>
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/home">
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/contador">
            Contador
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/formulario">
            Formulario
          </NavLink>
        </li>
        <li className="nav-item">
          <button
            onClick={onLogout}
            className="nav-link"
            Formulario
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
    </>
  );
}

export default CustomNavbar;