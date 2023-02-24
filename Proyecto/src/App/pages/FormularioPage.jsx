import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm";
import { setFormSlice } from "../../store/slices/formSlice"; 



export const FormularioPage = () => {

  const dispatch = useDispatch();

  const formSlice = useSelector((store) => store.formSlice);
  const [on, setOn] = useState(true);
  
  // console.log(formSlice);

  const { 
    formState, 
    onInputChange
  } = useForm({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNac: "",
    edad: "",
    genero: "",
  });


  const onSubmit = () => {
    event.preventDefault();
    console.log(formState);
    dispatch(setFormSlice(formState));
  }

  useEffect(() => {
    setOn(false); 
  }, [formSlice != null || formSlice != undefined ]);


  return (
    
    <div className="content card card-form">
      
      <h1>FormularioPage</h1>

      <form 
        className="card"
        onSubmit={onSubmit}>

        <label>
          Nombre:
          <input 
            name="nombre"
            onChange={onInputChange}
            required
            type="text"
            className="form-control"
            hidden={false} 
          />
        </label>

        <label>
          Apellido Paterno:
          <input 
            name="apellidoPaterno"
            onChange={onInputChange}
            required
            type="text"
            className="form-control"
            hidden={false} 
          />
        </label>

        <label>
          Apellido Materno:
          <input 
            name="apellidoMaterno"
            onChange={onInputChange}
            required
            type="text"
            className="form-control"
            hidden={false} 
          />
        </label>

        <label>
          Fecha de nacimiento:
          <input 
            name="fechaNac"
            onChange={onInputChange}
            type="date"
            className="form-control" 
          />
        </label>
        
        <label>
          Edad:
          <input 
            name="edad"
            onChange={onInputChange}
            required
            type="number"
            className="form-control"
          />
        </label>

        <label>
          Género:
          <select 
            name="genero" 
            className="form-control"
            onChange={onInputChange}  
            required
          >
            <option value="">Seleccione</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="O">Otro</option>
          </select>
        </label>
        
        <button 
          className="btn btn-primary mt-3"
          type="submit" 
        >Guardar</button>
      </form>

    </div>
  )
}