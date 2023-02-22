import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "..";
import { useFetch } from "../../hooks";
import { useDispatch } from "react-redux";
import { setLoaderShowState } from "../../store/slices/interactionCenterSlice";
import { useDeviceInfo } from "../../App/hooks/useDeviceInfo";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export const LoginPassword = () => {
  
    const { login } = useContext(AuthContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginViewIsActive = JSON.parse(localStorage.getItem("tempUserLogin"));
  
    const { deviceInfo } = useDeviceInfo();
  
    const [passwordView, setPasswordView] = useState(true);
  
    const [tempUserData, setTempUserData] = useState({
      tempName: "",
      nameWithPoints: "",
      tempEmail: "",
      userPassword: "",
      intentos: 0,
      errorRequest: false,
    });
    const { tempName, tempEmail, userPassword, intentos, errorRequest } =
      tempUserData;
  
    const { response, hasError, isLoading } = useFetch(
      "Login",
      {
        email: tempEmail,
        credential: userPassword,
        rememberMe: false,
        latUsr: deviceInfo.deviceLatitude + "",
        longUsr: deviceInfo.deviceLongitude + "",
        channel: 1,
        ip: deviceInfo.deviceIp + "",
        macAddress: "",
      },
      intentos
    );
  
    dispatch(setLoaderShowState(isLoading));
  
    if (!hasError && !!response) {
      const { session, data } = response;
      login({
        email: tempEmail,
        name: loginViewIsActive.tempName,
        userId: data.userId,
        sessionId: session.sessionId,
      });
      navigate("/", {
        replace: true,
      });
    }
  
    if (hasError) {
      const { error } = response;
      if ("L-008" == error.errorCode) {
        navigate("/login/twof", {
          replace: true,
        });
      }
    }
  
    const onLogin = (event) => {
      event.preventDefault();
      dispatch(setLoaderShowState(true));
      const passwordEvent = event.target[0].value;
      if (passwordEvent.length > 0) {
        setTempUserData({
          ...tempUserData,
          intentos: intentos + 1,
          userPassword: passwordEvent,
          tempEmail: loginViewIsActive.tempEmail,
          tempName: loginViewIsActive.name,
        });
      }
    };
  
    useEffect(() => {
      if (!loginViewIsActive) {
        navigate("/login", { replace: true });
      }
    }, []);
  
    return (
    <>
      
      <div className="content card card-form mt-5">
        <h1>
            Bienvenido: {loginViewIsActive?.nameWithPoints}!
        </h1>
        <h2>Favor de ingresar su contraseña:</h2>
        
        <form onSubmit={onLogin}>
            <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-2"
            >
            <Form.Control type="password" placeholder="**********" />
            </FloatingLabel>
            <button
            className="btn btn-secondary login__button login__button--login "
            type="submit"
            >
            Iniciar sesión
            </button>
        </form>
      </div>


    </>  
  )
}
