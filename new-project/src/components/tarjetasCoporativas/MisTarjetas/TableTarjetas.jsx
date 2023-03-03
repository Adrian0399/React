import { useState } from "react";
import { CardMenu } from "./CardMenu";


export const TableTarjetas = () => {

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
    <table class="main-content__table">
        <thead>
            <tr>
                <th>Tarjeta</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Saldo</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1234 5678 1234 5678</td>
                <td>Adrian Olvera Ordoñez</td>
                <td>correo1@example.com</td>
                <td>$ 5,000.00</td>     
                <td className="table__icons"> 
                                
                    <a className="icons__pointer">
                        <img src="src\assets\images\icons\Group 105.svg" alt="" />
                    </a>  
                    <a className="icons__pointer">
                        <img src="src\assets\images\icons\trash.svg" alt="" />
                    </a>  

                    <a className="icons__pointer" onClick={cambiarIcono}>
                        <img src={`src/assets/images/icons/${changeIcon}`} alt="" />
                    </a>         
                </td>
            </tr>
            {showDiv && (
                <tr className="table__menu-div">
                    <td colSpan="5">
                        <div className="full-width-div">
                            <CardMenu />
                        </div>
                    </td>
                </tr>
            )}
        </tbody>      
    </table>

    </>
  )
}
