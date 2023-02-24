import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export const FormEmail = () => {


  return (
    <>
        <FloatingLabel
          controlId="floatingInput"
          label="Correo"
          className="mb-2"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        
        <button
          type="submit"
          className="btn btn-primary"  
          // onClick={ onLogin }
        >
          Continuar
        </button>
    </>
  )
}
