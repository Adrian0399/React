import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSetSessionActivity } from '../App/hooks/useSetSessionActivity';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {

  const navigate = useNavigate();

  const { onCloseSession } = useSetSessionActivity();


  const onLogout = () => {
    navigate('/login', {
      replace: true
    });
  }

  return (
    <>
    <nav className="navbar navbar-expand-md mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <NavLink className="nav-link" to="home">
            Adrian-App
          </NavLink>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="home">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contador">
                Contador
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/formulario">
                Formulario
              </NavLink>
            </li>
          </ul>
          <button
            type="submit"
            onClick={() => onCloseSession()}
            className="btn btn-outline-danger"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>


    {/* <div>
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="home">
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="contador">
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
          <li className="nav-link ml-auto">
            <button
              onClick={() => onCloseSession()}
              className="btn btn-outline-danger"
            >
              Cerrar sesión
            </button>
          </li>
      </ul>
    </div> */}
    </>
  );
}

export default CustomNavbar;