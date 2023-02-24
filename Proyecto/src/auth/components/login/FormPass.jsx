import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import React from 'react'

export const FormPass = () => {
  return (
    <>
      <FloatingLabel
          controlId="floatingInput"
          label="Contraseña"
          className="mb-2"
        >
          <Form.Control type="password"/>
        </FloatingLabel>

      <button
        className="btn btn-primary"  
        type="submit"
      >
      Iniciar sesión
      </button>

    </>
  )
}
