import { Navigate, Route, Routes } from "react-router-dom"
import CustomNavbar from "../../components/CustomNavbar"
import { ContadorPage, FormularioDosPage, FormularioPage, HomePage } from "../pages"



export const HomeRoutes = () => {
  return (
    <>
    <CustomNavbar />
      <Routes>

        <Route path="/home" element={ <HomePage /> }  />

        {/* App */}
        <Route path="/contador" element={ <ContadorPage /> }  />
        <Route path="/formulario" element={ <FormularioPage /> }  />
        <Route path="/formularioo" element={ <FormularioDosPage />} />

        <Route path="/" element={ <Navigate to="/login" /> }  />
          
      </Routes>

    </>
  )
}
