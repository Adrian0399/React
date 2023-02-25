import { Route, Routes, useSearchParams } from "react-router-dom"
import { HomeRoutes } from "../app/routes/HomeRoutes"
import { LoginEmailView, LoginPassView } from "../auth";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";


export const AppRouter = () => {

    const [params, setParams] = useSearchParams(); //Ver si hace algo de momento

  return (
    <>
      <Routes>

        <Route
          path="/login/*"
          element={
            <PublicRoutes>
              <Routes>
                <Route path="/" element={<LoginEmailView />} />
                <Route path="/pass" element={<LoginPassView />} />
                
                {/* <Route path="/registro" element={<RegisterPage />} /> */}
                
                <Route path="/" element={<LoginEmailView />} />

              </Routes>
            </PublicRoutes>
          }
        />
        

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HomeRoutes />
            </PrivateRoutes>
          }
        />

      </Routes>

    </>
  )
}
