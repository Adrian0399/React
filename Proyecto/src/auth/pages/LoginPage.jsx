
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useInteractionCenter } from "../../hooks/useInteractionCenter";
import { useGeolocation } from "../../store/slices/useGeolocation";
import { FormEmail } from "../components/login/FormEmail";
import { GeolocationInfoHome } from "./GeolocationInfoHome";

export const LoginPage = () => {

  const navigate = useNavigate();

  const { onShowLoader } = useInteractionCenter();

  // const URL_HOME_SITE = import.meta.env.VITE_URL_HOME_SITE;

  const [formEmailState, setFormEmailState] = useState({
    emailForm: "",
    intentos: 0,
    errorRequest: false,
  });

  const { geolocationState, getGeolocation, isLoadingGeoLocation } =
    useGeolocation();

  const { emailForm, intentos, errorRequest } = formEmailState;

  if (
    true == geolocationState.activeGeolocation &&
    null != geolocationState.navitagorLatitud
  ) {
    navigate("/login/pass", {
      replace: true,
    });
  }

  const onActionForm = (event) => {
    event.preventDefault();
    onShowLoader(true);
    setFormEmailState({
      ...formEmailState,
      emailForm: "",
    });
    const emailEvent = event.target[0].value;
    if (emailEvent.length == 0 && !emailEvent.includes("@")) {
      return;
    }
    setFormEmailState({
      ...formEmailState,
      emailForm: emailEvent,
      intentos: intentos + 1,
    });
  };

  const { data, hasError, isLoading, response } = useFetch(
    "GetNameToLogin",
    {
      email: emailForm,
    },
    intentos
  );

  onShowLoader(isLoading);

  if (!!data) {
    const { email, name, nameWithPoints } = data;
    localStorage.setItem(
      "tempUserLogin",
      JSON.stringify({
        tempName: name,
        nameWithPoints,
        tempEmail: email,
        tempTwof: "",
        tempRpassword: "",
      })
    );
    onShowLoader(isLoadingGeoLocation);
    getGeolocation();
  }

  const getGeolocationHelper = async () => {
    const url = await fetch("https://geolocation-db.com/json/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const response = await url.json();
    localStorage.setItem(
      "geolocationHandler",
      JSON.stringify({ ...response, timestamp: new Date().getTime() })
    );
  };

  useEffect(() => {
    localStorage.removeItem("navigatorGeolocationHandler");
    localStorage.removeItem("tempUserLogin");
    getGeolocationHelper();

    if (emailForm.length == 0 && !emailForm.includes("@")) {
      return;
    }
    setFormEmailState({
      ...formEmailState,
      emailForm,
    });

    getGeolocation();
  }, []);

    // const onLogin = () => {
    //   navigate('/', {
    //     replace: true
    //   });
    // }
  
  return (

    <>
      <div className="content card card-form mt-5">
        <h1>Login Page</h1>
        <form onSubmit={onActionForm}>
          {geolocationState.activeGeolocation ? (
            <FormEmail />
          ) : (
            <GeolocationInfoHome />
          )}
        </form>
      </div>

    </>  
  )
}
