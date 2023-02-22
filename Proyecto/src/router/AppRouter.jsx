
import { Route, Routes, useSearchParams } from "react-router-dom"
import { HomeRoutes } from "../App/routes/HomeRoutes"
import { LoginPage, LoginPassword, RegisterPage } from "../auth/pages"
import { Login2fa } from "../auth/pages/Login2fa";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  const [params, setParams] = useSearchParams();

  return (
    <>
      <Routes>

        <Route
          path="/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
                <Route path="/login/pass" element={<LoginPassword />} />
                <Route path="/login/2fa" element={<Login2fa />} />
                
                <Route path="/registro" element={<RegisterPage />} />
                
                <Route path="/" element={<LoginPage />} />

              </Routes>
            </PublicRoute>
          }
        />
        

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HomeRoutes />
            </PrivateRoute>
          }
        />

      </Routes>

    </>
    );
};
