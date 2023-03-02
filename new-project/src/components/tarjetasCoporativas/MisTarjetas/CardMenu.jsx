

export const CardMenu = () => {
  return (
    <>
    <div className="content__div-table">
        <h1 className="main-content__title">Saldo</h1>  
        
        <div className="main-content__div-row">
            <div className="main-content__div-column">
                <label for="numero-tarjetas" className="main-content__label">Asignar saldo</label>
                <div className="main-content__div-container">
                    <input type="number" id="numero-tarjetas" className="main-content__input content__div-table--input" placeholder="100"/>
                    <button className="main-content__button main-content__button--submit content__div-table--btn asignar-saldo__btn">Confirmar</button>
                </div>
            </div>
            <div className="main-content__div-column">
                <label for="numero-tarjetas" className="main-content__label div-column__secondary">Quitar saldo</label>
                <div className="main-content__div-container">
                    <input type="number" id="numero-tarjetas" className="main-content__input content__div-table--input div-column__secondary" placeholder="100"/>
                    <button className="main-content__button main-content__button--submit content__div-table--btn div-column__secondary">Confirmar</button>
                </div>
            </div>
        </div>
        <h1 className="main-content__title content__div-table--title">Reemplazar tarjeta</h1>  
        <div className="main-content__div-row">
            <div className="main-content__div-column">
                <label for="numero-tarjetas" className="main-content__label">Nueva tarjeta</label>
                <div className="main-content__div-container">
                    <input type="number" id="numero-tarjetas" className="main-content__input main-content__input--newcard" placeholder="100"/>
                </div>
            </div>
            <div className="main-content__div-column">
                <label for="numero-tarjetas" className="main-content__label div-column__secondary">Confirma tu tarjeta</label>
                <div className="main-content__div-container">
                    <input type="number" id="numero-tarjetas" className="main-content__input content__div-table--input div-column__secondary" placeholder="100"/>
                    <button className="main-content__button main-content__button--submit content__div-table--btn div-column__secondary">Confirmar</button>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
