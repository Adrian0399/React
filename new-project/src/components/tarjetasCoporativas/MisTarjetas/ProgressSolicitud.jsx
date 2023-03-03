import { ProgressBar } from 'react-bootstrap';


export const ProgressSolicitud = () => {


  return (
    <>
    <div className="content__progress">
        <div className="content__progress-bar">
            <ProgressBar animated striped variant="warning" now={30} />
        </div>
        
        <div className="content__progress-icons">

            <div class="icon-container">
                <img class="icon1" src="src/assets/images/icons/status-solicitud-tarjetas/status-sol-1.svg" alt="Icono 1" />
                <p class="icon-description">¡En proceso!</p>
                <label for="nombre-completo" className="main-content__label">Tu solicitud ha sido registrada en breve te notificaremos.</label>
            </div>

            <div class="icon-container">
                <img class="icon2" src="src/assets/images/icons/status-solicitud-tarjetas/status-sol-2.svg" alt="Icono 2" />
                <p class="icon-description">¡Exito!</p>
                <label for="nombre-completo" className="main-content__label">Tu solicitud ha sido aprobada</label>
            </div>

            <div class="icon-container">
                <img class="icon3" src="src/assets/images/icons/status-solicitud-tarjetas/status-sol-3.svg" alt="Icono 3" />
                <p class="icon-description">¡En proceso!</p>
                <label for="nombre-completo" className="main-content__label">Estamos empaquetando tus tarjetas.</label>
            </div>

            <div class="icon-container">
                <img class="icon4" src="src/assets/images/icons/status-solicitud-tarjetas/status-sol-4.svg" alt="Icono 4" />
                <p class="icon-description">¡Ya casi!</p>
                <label for="nombre-completo" className="main-content__label">Tus tarjetas estan en camino</label>
            </div>

            <div class="icon-container">
                <img class="icon5" src="src/assets/images/icons/status-solicitud-tarjetas/status-sol-5.svg" alt="Icono 5" />
                <p class="icon-description">¡Exito!</p>
                <label for="nombre-completo" className="main-content__label">¿Ya llegarón tus tarjetas?</label>                
            </div>

        </div>  
    </div> 
    
    <div className="content__progress-btn">
        <button className="main-content__button main-content__button--submit">Ya tengo mis tarjetas</button>
    </div>     
    </>
  )
}
