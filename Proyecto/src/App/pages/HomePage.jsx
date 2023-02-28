import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CustomNavbar from "../../components/CustomNavbar";
import { useDashboard } from "../hooks/useDashboard";
// import { useGetCatalogosGlobables } from "../hooks/useGetCatalogosGlobables";
import { useSession } from "../hooks/useSession";

export const HomePage = () => {

  const dispatch = useDispatch();
  const { loginSession } = useDashboard();
  const time = useSession();


  //carga inicial
  // useGetCatalogosGlobables();
  // useBanks();
  // useSendMoneyGetAuthorizersAndNotifiers();
  //carga inicial

  useEffect(() => {
    loginSession();
  }, []);

  return (
    <>
    <CustomNavbar />
      <div className="content card">
      <h1>HomePage</h1>  
        <div className="card">
          <h1>Session Id: </h1>
        </div>
      </div>
    </>
  )
}
