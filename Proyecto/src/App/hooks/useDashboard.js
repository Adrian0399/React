import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../../store/slices/userData";


import { useFetch } from "../../hooks";

export const useDashboard = () => {
  localStorage.removeItem("tempUserLogin");
  const { userLogged, logout } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [request, setRequest] = useState({
    url: "",
    attempts: 0,
    type: 0,
    request: {},
  });

  const reset = () => {
    setRequest({
      url: "",
      attempts: 0,
      type: 0,
      request: {},
    });
  };
  const logoutSession = () => {
    reset();
    setTimeout(() => {
      setRequest({
        url: "SetSessionActivity",
        request: {
          action: 2,
        },
        attempts: 1,
        type: 1,
      });
      dispatch(setUserData({
        userId:null,
        sessionId:null,
      }));
    }, 1000);

  };

  const loginSession = () => {
    reset();
    setTimeout(() => {
      setRequest({
        url: "SetSessionActivity",
        request: {
          action: 1,
        },
        attempts: 1,
        type: 1,
      });
    }, 1000);
  };

  const { isLoading } = useFetch(
    request.url,
    request.request,
    request.attempts,
    request.type
  );

  return {
    loginSession,
    isLoading,
    logoutSession,
  };
};
