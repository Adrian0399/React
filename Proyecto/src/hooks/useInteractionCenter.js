import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setShow,setToastMessage,setLoaderShowState} from '../store/slices/interactionCenterSlice';

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
