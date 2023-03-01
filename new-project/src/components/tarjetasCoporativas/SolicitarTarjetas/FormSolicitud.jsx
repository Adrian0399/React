

export const FormSolicitud = () => {
  return (
    <>
        <form action="">
            <div className="main-content__form">

                <div className="main-content__form-row">
                    <label for="numero-tarjetas" className="main-content__label">Número de tarjetas:</label>
                    <input type="number" id="numero-tarjetas" className="main-content__input" placeholder="100"/>
                </div>

                <div className="main-content__form-row">
                    <label for="nombre-completo" className="main-content__label">Nombre completo:</label>
                    <input type="text" id="nombre-completo" className="main-content__input" placeholder="Adrian Olvera"/>
                </div>

                <div className="main-content__form-row">
                    <label for="nombre-completo" className="main-content__label">Número de teléfono:</label>
                    <input type="tel" id="numero-telefono" className="main-content__input" placeholder="55 1234 5678"/>
                </div>              
                
                <div className="main-content__form-row">
                    <label for="correo" className="main-content__label">Correo:</label>
                    <input type="email" id="correo" className="main-content__input" placeholder="correoelectronico@gmail.com"/>
                </div>
            </div>
        
            <div className="main-content__form-row main-content__form-row--button">
                <button className="main-content__button main-content__button--submit">Solicitar tarjetas</button>
            </div>
        
        </form>
    </>
  )
}
