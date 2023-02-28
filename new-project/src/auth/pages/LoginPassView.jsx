
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDeviceInfo } from '../../app/hooks';
import { useFetch } from '../../hooks';
import { setLoaderShowState } from '../../store/slices';
import { FormLoginPass } from '../components'
import { AuthContext } from '../context';

export const LoginPassView = () => {

  const { login } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginViewIsActive = JSON.parse(localStorage.getItem("tempUserLogin"));

  const { deviceInfo } = useDeviceInfo();

  // const [passwordView, setPasswordView] = useState(true);

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
    navigate("/login", {
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
      <div className="form__login">
        <form onSubmit={onLogin}>
          <FormLoginPass nameWithPoints={loginViewIsActive?.nameWithPoints} />
        </form>
      </div>
    </>
  )
}
