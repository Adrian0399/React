import { Navigate, Route, Routes } from "react-router-dom"
import CustomNavbar from "../../components/CustomNavbar"
import { ContadorPage } from "../pages/ContadorPage"
import { Formulario } from "../pages/Formulario"


export const HomeRoutes = () => {
  return (
    <>
      <Routes>
          <Route path="contador" element={ <ContadorPage />} />
          <Route path="formulario" element={ <Formulario />} />
          

          <Route path="/*" element={ <Navigate to="/contador" />} />

      </Routes>
    </>
  )
}
