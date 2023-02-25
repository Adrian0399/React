import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoaderShowState, setToastMessage } from "../store/slices";

export const useInteractionCenter = () => {

  const dispatch = useDispatch();


  const setInfoToast = (code,msj) => {
    dispatch(setLoaderShowState(false));
    dispatch(setToastMessage({status:code,mensaje:msj}))
  }

  const onShowLoader = (show=false) => {
    dispatch(setLoaderShowState(show));
  }

  useEffect(() => {
    
  }, []);

  return {
    setInfoToast,
    onShowLoader
  };
};
