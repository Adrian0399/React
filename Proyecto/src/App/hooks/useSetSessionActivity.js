import { useEffect, useState } from "react";
import { useFetch } from '../../hooks';
import { endPoint } from '../../types/';
import { useContext } from "react";
import { AuthContext } from "../../auth";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { setProfileInformation,setCatalogosGlobales } from "../../store/slices/profileSlice";
import { setUserData } from "../../store/slices/userData";

export const useSetSessionActivity = () => {

  const profileUser = useSelector((store) => store.profileSlice?.profile);
  const dispatch = useDispatch();

    const {logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const [setSessionActivityState, setsetSessionActivityState] = useState({action:0,counter:0});
    const {action,counter} = setSessionActivityState;

    const {code, data, hasError, isLoading } = useFetch(
        endPoint.setSessionActivity,
        {action},
        counter,
        endPoint.private);
    
    const onCloseSession = () => {
      setsetSessionActivityState({
        ...setSessionActivityState,
        action:2,
        counter:counter+1
      });
      dispatch(setProfileInformation({
        dateCreation:null,
        creationYear:null,
        crationMonth:null,
        sendingMoneyAuthorizer:false,
        isNational:true,
        isBritus:null,
        lastSession:null,
        updatedTerms:true,
        }));
        dispatch(setCatalogosGlobales(null));
    }

    const onUpdateSesion = () => {
      setsetSessionActivityState({
        ...setSessionActivityState,
        action:1,
        counter:counter+1
      });
    }

    if(2==action && 200==code){
      logout();
      navigate("/home", {
        replace: true,
      });
      dispatch(setUserData({
        userId:null,
        sessionId:null,
      }));
    }

    useEffect(() => {
      setsetSessionActivityState({
        ...setSessionActivityState,
        action:0,
        counter:0
      });
    }, [data])

   

  return {
    onCloseSession,
    onUpdateSesion
  }
}
