import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function CustomNavbar() {
  return (
    <>
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <NavLink
            className="nav-link"
            to="/home">
            Inicio
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            className="nav-link"
            to="/contador">
            Contador
          </NavLink>
        </li>
        <li class="nav-item">
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