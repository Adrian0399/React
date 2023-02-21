import { Navigate, Route, Routes } from "react-router-dom"
import { ContadorPage, FormularioPage, HomePage } from "../App/pages/"
import CustomNavbar from "../components/CustomNavbar"


export const AppRouter = () => {
  return (
    <>
    <CustomNavbar />
      <Routes>

        <Route path="/home" element={ <HomePage /> }  />

        {/* App */}
        <Route path="/contador" element={ <ContadorPage /> }  />
        <Route path="/formulario" element={ <FormularioPage /> }  />

        <Route path="/*" element={ <Navigate to="/home" /> }  />


          
      </Routes>

    </>


  )
}
