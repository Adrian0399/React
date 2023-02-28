import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CustomNavbar } from "../../components/CustomNavbar";
import { useSession } from "../hooks";
import { useDashboard } from "../hooks/useDashboard";


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
      <div className="content"> 
        <h1>HomePage</h1>
      </div>
      
    </>
  )
}
