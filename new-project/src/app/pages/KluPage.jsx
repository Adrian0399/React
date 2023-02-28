import { Footer } from "../../components/headerKlu/Footer"
import { Header } from "../../components/headerKlu/Header"
import { MisSolicitudes } from "../../components/tarjetasCoporativas/MisSolicitudes"
import { TarjetasCorporativas } from "../../components/tarjetasCoporativas/TarjetasCorporativas"


export const KluPage = () => {
  return (
    <>
        <Header />
        <TarjetasCorporativas />
        <MisSolicitudes />
        <Footer />
    </>
  )
}
