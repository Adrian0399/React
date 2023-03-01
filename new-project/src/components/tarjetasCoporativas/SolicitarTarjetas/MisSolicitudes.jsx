import { Paginador } from "../Paginador"


export const MisSolicitudes = () => {
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Solicitud 1</td>
                        <td>Nombre 1</td>
                        <td>correo1@example.com</td>
                        <td>5,000</td>                
                    </tr>
                    <tr>
                        <td>Solicitud 2</td>
                        <td>Nombre 2</td>
                        <td>correo2@example.com</td>
                        <td>20,000</td>                
                    </tr>
                    <tr>
                        <td>Solicitud 3</td>
                        <td>Nombre 3</td>
                        <td>correo3@example.com</td>
                        <td>2,500</td>                
                    </tr>
                    <tr>
                        <td>Solicitud 4</td>
                        <td>Nombre 4</td>
                        <td>correo4@example.com</td>
                        <td>2,000</td>                
                    </tr>
                    <tr>
                        <td>Solicitud 5</td>
                        <td>Nombre 5</td>
                        <td>correo5@example.com</td>
                        <td>2,000</td>                
                    </tr>
                    <tr>
                        <td>Solicitud 6</td>
                        <td>Nombre 6</td>
                        <td>correo6@example.com</td>
                        <td>2,000</td>                
                    </tr>
                    <tr>
                        <td>Solicitud 7</td>
                        <td>Nombre 7</td>
                        <td>correo7@example.com</td>
                        <td>2,000</td>                
                    </tr>
                    <tr>
                        <td>Solicitud 8</td>
                        <td>Nombre 8</td>
                        <td>correo8@example.com</td>
                        <td>2,000</td>                
                    </tr>
                </tbody>
                
            </table>

            <Paginador />
            
        </div>
    </div>
    </>
  )
}
