import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { getTimestamp, getDeviceInfo, deleteFilesLogoff } from "../../helpers";


const deviceInfo = getDeviceInfo();

const geolocationHandler = JSON.parse(
  localStorage.getItem("geolocationHandler")
);

const initialState = {
  logged: false,
  twofactor: false,
  resetPass: false,
  channel: 1,
  deviceId: "pruebas",
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("userLogged"));

  return {
    logged: !!user,
    userLogged: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = async (objLogin = {}) => {
    const userLogged = {
      ...deviceInfo,
      userId: objLogin.userId,
      name: objLogin.name,
      email: objLogin.email,
      sessionId: objLogin.sessionId,
      date: getTimestamp(),
      geolocation: !!geolocationHandler ? geolocationHandler : "",
    };
    const action = {
      type: types.login,
      payload: userLogged,
    };
    localStorage.setItem("userLogged", JSON.stringify(userLogged));
    dispatch(action);
  };

  const logout = () => {
    deleteFilesLogoff();
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
