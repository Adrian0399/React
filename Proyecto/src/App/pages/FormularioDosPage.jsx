import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const FormularioDosPage = () => {
    return (
        <>
        <div className="content card card-form">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-2"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          </div>
        </>        
      );
}

export default FormularioDosPage;