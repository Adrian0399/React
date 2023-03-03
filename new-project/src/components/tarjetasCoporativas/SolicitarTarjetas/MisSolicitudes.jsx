import { useState } from "react";
import { CardMenu } from "../MisTarjetas/CardMenu";
import { ProgressSolicitud } from "../MisTarjetas/ProgressSolicitud";
import { Paginador } from "../Paginador"


export const MisSolicitudes = () => {

    const [changeIcon, setChangeIcon] = useState('down.svg') //Estado del icono inicial
    const [showDiv, setShowDiv] = useState(false);


    function cambiarIcono() {
        if (changeIcon === 'down.svg') {
            setChangeIcon('down1.svg');
            setShowDiv(true);
        } else {
            setChangeIcon('down.svg');
            setShowDiv(false);
        }
    }


  return (
    <>
    <div class="main-content-secondary">
        <div class="main-content__container">
            <div class="main-content__title-container">
                <h1 class="main-content__title">Mis Solicitudes</h1>
            </div>
            
            <table class="main-content__table">
                <thead>
                    <tr>
                        <th>Solicitud</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Número de tarjetas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>Solicitud 1</td>
                        <td>Nombre 1</td>
                        <td>correo1@example.com</td>
                        <td>5,000</td>       
                        <td>
                            <a className="icons__pointer" onClick={cambiarIcono}>
                                <img src={`src/assets/images/icons/${changeIcon}`} alt="" />
                            </a>    
                        </td>         
                    </tr>
                    
                    {showDiv && (
                        <tr>
                            <td colSpan="5">
                                <div>
                                    <ProgressSolicitud />
                                </div>
                            </td>
                        </tr>
                    )}
            
                </tbody>
                
            </table>

            <Paginador />
            
        </div>
    </div>
    </>
  )
}
