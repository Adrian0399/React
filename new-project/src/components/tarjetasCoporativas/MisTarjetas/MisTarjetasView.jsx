import { Paginador } from "../Paginador"
import { TableTarjetas } from "./TableTarjetas"


export const MisTarjetasView = () => {
  return (
    <>

      <div className="cardsView__field">
        <label for="filterInput" className="main-content__label">Filtrar por tarjeta</label>
        <div className="cardsView__buttons">
          <div className="cardsView__inputContainer">
            <input type="text" id="filterInput" className="main-content__input cardsView__input" placeholder=" 1234 5678 1234 5678"/>
            <button className="main-content__button main-content__button--submit cardsView__button--filtro">Filtros</button>
          </div>   

          <div className="cardsView__assign">
            <button className="main-content__button main-content__button--submit cardsView__button--asignar">Asignar</button>
          </div>   
          
        </div>
      </div>

      <TableTarjetas />

      <Paginador />
    
    </>
  )
}
