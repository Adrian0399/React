import { Footer } from "../../components/headerKlu/Footer"
import { Header } from "../../components/headerKlu/Header"
import { TarjetasCorporativasView } from "../../components/tarjetasCoporativas/TarjetasCorporativasView"
import { MisSolicitudes } from "../../components/tarjetasCoporativas/SolicitarTarjetas/MisSolicitudes"


export const TarjetasCorporativas = () => {
  return (
    <>
        <Header />

          <TarjetasCorporativasView />
        
        <Footer />
    </>
  )
}
