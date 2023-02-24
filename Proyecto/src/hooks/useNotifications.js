import { useEffect } from "react";
import toast, { useToaster } from "react-hot-toast/headless";

export const useNotifications = () => {

    const { toasts, handlers } = useToaster();
    const { startPause, endPause, calculateOffset, updateHeight } = handlers;


  const setNotifications = (status='200',mensage='') => {

  }

  useEffect(() => {
    
  }, []);

  return {
    setNotifications
  }
}
