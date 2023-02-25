import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../auth";
import { getToken } from "../helpers/getToken";
import { getAuthentication, dencryptRSA } from "../helpers";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../store/slices/userData";


export const useFetchDataV2 = (api, request, intento, type = 0) => {
  const fileForm = new FormData();
  const { userLogged } = useContext(AuthContext);
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.userData?.userData);
  let url = `${import.meta.env.VITE_KLU_API}${api}`;
  const [state, setState] = useState({
    data: "",
    isLoading: 0 != intento ? true : false,
    hasError: false,
    response: null,
    code: 0,
  });

  const getFetch = async () => {
    const { token, deviceId } = await getToken();
    let userId = userData?.userId;
    let sessionId = userData?.sessionId;
    Object.keys(request).map(
        keysItem => {
            fileForm.append(keysItem, request[keysItem]);
        }
    );

    if (1 == type) {
        // fileForm.append("userId", userLogged.userId);
        // fileForm.append("sessionId", userLogged.sessionId);
        // fileForm.append("token", token);
        // fileForm.append("deviceId", deviceId);
        file.append("authentication",getAuthentication({token, deviceId, userId, sessionId}))

    }

    const body = {
      method: "POST",
      body: fileForm,
    };

    setState({
      ...state,
      isLoading: true,
      data: "",
    });

    const resp = await fetch(url, body);
    const result = await resp.json();
    const response = result;
    const { code, data } = response;

    setState({
      data,
      isLoading: false,
      hasError: "200" != code ? true : false,
      response,
      code,
    });
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
  };
};