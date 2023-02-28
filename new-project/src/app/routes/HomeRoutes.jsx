import { Navigate, Route, Routes } from "react-router-dom"
import { ContadorPage, FormularioPage, HomePage } from "../pages"
import { KluPage } from "../pages/KluPage"


export const HomeRoutes = () => {
  return (
    <>
    {/* <CustomNavbar /> ----> Esto ira dentro de cada componente */}
    {/* <SideBar /> */}
    <Routes>

        <Route path="/home" element={ <HomePage /> }  />

        {/* App */}
        <Route path="contador" element={ <ContadorPage /> }  />
        <Route path="formulario" element={ <FormularioPage /> }  />
        <Route path="klu" element={ <KluPage /> }  />

        <Route path="/" element={ <Navigate to="/login" /> }  />

      </Routes>

    </>
  )
}
