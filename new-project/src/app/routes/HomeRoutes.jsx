import { Navigate, Route, Routes } from "react-router-dom"
import { SideBar } from "../../components/SideBar/SideBar"
import { ContadorPage, FormularioPage, HomePage } from "../pages"


export const HomeRoutes = () => {
  return (
    <>
    {/* <CustomNavbar /> ----> Esto ira dentro de cada componente */}
    <SideBar />
    <Routes>

        <Route path="/home" element={ <HomePage /> }  />

        {/* App */}
        <Route path="/contador" element={ <ContadorPage /> }  />
        <Route path="/formulario" element={ <FormularioPage /> }  />

        <Route path="/" element={ <Navigate to="/login" /> }  />
          
      </Routes>
      
    </>
  )
}
