import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";
import { useInteractionCenter } from "../../hooks/useInteractionCenter";
import { setBackExpired } from "../../store/slices/backExpired";
import { setUserData } from "../../store/slices/userData";


const TIME_SESSION = import.meta.env.VITE_SESION_EXPIRE;

export const useSession = () => {
  const {setInfoToast}=useInteractionCenter();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const incrementCounter = () => {
    let currentDate = String(new Date());
    localStorage.setItem("DATE", currentDate);
  };



  function AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }


  const redirectLogin = (response) => {
    setInfoToast(response?.code, response?.error?.msg);
    logout();
    navigate("/home", {
      replace: true,
    });
    dispatch(setUserData({
      userId:null,
      sessionId:null,
    }));
  };

  useEffect(() => {
    let interval = setInterval(function () {
      let now = new Date().getTime();
      let currentTime = AddMinutesToDate(
        new Date(localStorage.getItem("DATE")),
        parseInt(TIME_SESSION)
      );

      let distance = currentTime - now;

      // let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // let seconds = Math.floor((distance % (1000 * 60)) / 1000);


      if (distance < 0 || localStorage.getItem("userLogged") === null) {
        dispatch(setBackExpired(true));
        clearInterval(interval);
      }
      if (distance > 0 && localStorage.getItem("userLogged") === null) {
        dispatch(setBackExpired(false));
      }
    }, 1000);
  }, []);

  return {
    redirectLogin,
    incrementCounter,
  };
};
