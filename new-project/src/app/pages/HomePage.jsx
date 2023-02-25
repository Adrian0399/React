import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
    <main class="d-flex flex-nowrap">
      <h1>HomePage</h1>
    </main>
      
    </>
  )
}
