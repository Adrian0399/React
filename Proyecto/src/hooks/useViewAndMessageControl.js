import React, { useEffect, useState } from "react";

export const useViewAndMessageControl = () => {
  const [onRedirectView, setonRedirectView] = useState({
    view: '',
    isRedirect: false,
    isError: false,
    message: "",
  });
  
  const onSetRedirectView = (data={}) => {
    setonRedirectView({...data});
  }

  useEffect(() => {
    
  }, [onRedirectView])
  

  return {
    onRedirectView,
    onSetRedirectView
  };
};
