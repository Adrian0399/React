import { useEffect, useState, useContext } from "react";
import { getToken } from "../helpers";
import { useSelector, useDispatch } from "react-redux";
import { getAuthenticationGetName, getAuthentication, getAuthenticationLogin, dencryptRSA } from "../helpers";
import { setUserData } from "../store/slices/userData";
import { useSession } from "../app/hooks/useSession";
import { AuthContext } from "../auth";

export const useFetch = (api, request, intento = 0, type = 0) => {
  const dispatch = useDispatch();
  const { userLogged } = useContext(AuthContext);
  const userData = useSelector((store) => store.userData?.userData);
  const { incrementCounter, redirectLogin } = useSession();
  let userId = userData?.userId;
  let sessionId = userData?.sessionId;
  let url = `${import.meta.env.VITE_KLU_API}${api}`;
  
  const [state, setState] = useState({
    data: "",
    isLoading: 0 != intento ? true : false,
    hasError: false,
    response: null,
    error: {},
    code: 0,
    result: {},
  });

  const getFetch = async () => {
    const { token, deviceId } = await getToken();
    let req = { 
      ...request, 
      authentication: getAuthenticationGetName({token, deviceId})
    };

    if(api == "Login"){
      let credentials = request?.credential
      req = {
        ...request, 
        authentication: getAuthenticationLogin({token, deviceId, credentials})
      };
      dispatch(setUserData({
        userId:null,
        sessionId:null,
      }));
    }
    if (1 == type) {
      if( userId == null && sessionId == null){
        userId = dencryptRSA(userLogged?.userId);
        sessionId = dencryptRSA(userLogged?.sessionId);
        dispatch(setUserData({
          userId: userId,
          sessionId: sessionId,
        }))
      }
      req = {
        ...request,
        authentication: getAuthentication({token, deviceId, userId, sessionId})
      };
    }
    
    
    const body = {
      method: "POST",
      credentials: "omit",
      body: JSON.stringify(req),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
    };
    setState({
      ...state,
      isLoading: true,
      data: "",
    });

    await fetch(url, body)
      .then((result) => result.json())
      .then((response) => JSON.parse(response))
      .then((allResp) =>
        allResp?.error?.errorCode === "G-014"
          ? redirectLogin(allResp)
          : setState({
              data: allResp.data,
              isLoading: false,
              hasError: "200" != allResp.code ? true : false,
              response: allResp,
              error: allResp?.error,
              code: allResp.code,
            })
      )
      .then(() => incrementCounter());
  };

  useEffect(() => {
    if (intento > 0) {
      getFetch();
    }
  }, [intento]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    response: state.response,
    code: state.code,
    error: state.error,
    result: state.result
  };
};
