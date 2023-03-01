
import { useState } from "react"
import { MisTarjetasView } from "./MisTarjetas/MisTarjetasView"
import { SolicitudesView } from "./SolicitarTarjetas/SolicitudesView"


export const TarjetasCorporativasView = () => {

  const [selectedView, setSelectedView] = useState('MisTarjetasView');

  const handleMisTarjetasClick = () => {
    setSelectedView('MisTarjetasView');
  };

  const handleSolicitudesClick = () => {
    setSelectedView('SolicitudesView');
  };


  return (
    <>
    <div className="main-content">
        <div className="main-content__container">
            <div className="main-content__title-container">
                <h1 className="main-content__title">Tarjetas Corporativas</h1>            
                <a href="#" className="main-content__link">←  Volver a mi cuenta</a>
            </div>
            <div className="main-content__card">

            <div className="main-content__buttons">
              <button 
                className="main-content__button"
                onClick={ handleMisTarjetasClick }
                value="MisTarjetasView"
              >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.99847 18.9997L1.10111 6.28367C1.01789 5.7259 1.41209 5.20968 1.97209 5.14309L19.0509 3.11233C19.5812 3.04927 20.0675 3.4141 20.1553 3.94093L20.9985 8.99966" stroke="#2F2F2F" stroke-width="1.5"></path><mask id="path-2-inside-1_7326_88239" fill="white"><rect x="2" y="8" width="20" height="12" rx="1"></rect></mask><rect x="2" y="8" width="20" height="12" rx="1" stroke="#2F2F2F" stroke-width="3" mask="url(#path-2-inside-1_7326_88239)"></rect><path d="M3 12H21" stroke="#2F2F2F" stroke-width="1.5"></path><circle cx="17.5" cy="16.5" r="0.75" fill="#2F2F2F" stroke="#2F2F2F" stroke-width="1.5"></circle><circle cx="18.5" cy="16.5" r="0.75" fill="#2F2F2F" stroke="#2F2F2F" stroke-width="1.5"></circle><path d="M5 14C5 14 6.21895 14 7 14" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"></path><path d="M5 16C5 16 7.4379 16 9 16" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"></path></svg>
                  Mis Tarjetas Corporativas
              </button>
              <button 
                className="main-content__button"
                onClick={ handleSolicitudesClick }
                value="SolicitudesView"
              >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.99847 18.9997L1.10111 6.28367C1.01789 5.7259 1.41209 5.20968 1.97209 5.14309L19.0509 3.11233C19.5812 3.04927 20.0675 3.4141 20.1553 3.94093L20.9985 8.99966" stroke="#2F2F2F" stroke-width="1.5"></path><mask id="path-2-inside-1_7326_88239" fill="white"><rect x="2" y="8" width="20" height="12" rx="1"></rect></mask><rect x="2" y="8" width="20" height="12" rx="1" stroke="#2F2F2F" stroke-width="3" mask="url(#path-2-inside-1_7326_88239)"></rect><path d="M3 12H21" stroke="#2F2F2F" stroke-width="1.5"></path><circle cx="17.5" cy="16.5" r="0.75" fill="#2F2F2F" stroke="#2F2F2F" stroke-width="1.5"></circle><circle cx="18.5" cy="16.5" r="0.75" fill="#2F2F2F" stroke="#2F2F2F" stroke-width="1.5"></circle><path d="M5 14C5 14 6.21895 14 7 14" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"></path><path d="M5 16C5 16 7.4379 16 9 16" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round"></path></svg>    
                  Solicitar Tarjetas
              </button>
            </div>


            {selectedView === "MisTarjetasView" ? (
              <MisTarjetasView />
            ) : (
              <SolicitudesView />
            )}


            </div>
        </div>
    </div>
    </>
  )
}
