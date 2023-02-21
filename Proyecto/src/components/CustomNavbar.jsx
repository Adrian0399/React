import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function CustomNavbar() {
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
      </ul>
    </div>
    </>
  );
}

export default CustomNavbar;