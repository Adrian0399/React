import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { setFormSlice } from "../../store/slices";
import { useForm } from "../hooks/useForm";

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
    
    <div className="mb-3">
      <h1>FormularioPage</h1>
      <form onSubmit={onSubmit}>
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
        <br />
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
        <br />
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
        <br />
        <label>
          Fecha de nacimiento:
          <input 
            name="fechaNac"
            onChange={onInputChange}
            type="date"
            className="form-control" 
          />
        </label>
        <br />
        <label>
          Edad:
          <input 
            name="edad"
            onChange={onInputChange}
            required
            type="number"
            className="form-control"
            hidden={false} 
          />
        </label>
        <br />
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
        <br />
        <button 
          type="submit" 
        >Guardar</button>
      </form>



    </div>
  )
}