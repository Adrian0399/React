import React, { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [geolocationState, setgeolocationState] = useState({
    activeGeolocation: true,
    navitagorLatitud: null,
    navitagorLongitud: null,
    hardLogout:false,
  });

  const [isLoadingGeoLocation, setisLoadingGeoLocation] = useState(true);

  const getGeolocation = () => {
    
    navigator.geolocation.getCurrentPosition(
      (success) => {
        setisLoadingGeoLocation(false);
        localStorage.setItem(
          "navigatorGeolocationHandler",
          JSON.stringify({
            navitagorLatitud: success.coords.latitude,
            navitagorLongitud: success.coords.longitude,
            timeStamp:new Date().getTime(),
          })
        );
        setgeolocationState({
          ...geolocationState,
          activeGeolocation: true,
          navitagorLatitud: success.coords.latitude,
          navitagorLongitud: success.coords.longitude,
        });
      },
      (error) => {
        setisLoadingGeoLocation(false);
        localStorage.removeItem("navigatorGeolocationHandler");
        setgeolocationState({
          activeGeolocation: false,
          navitagorLatitud: null,
          navitagorLongitud: null,
          hardLogout:true
        });
      }
    );
  };

  useEffect(() => {}, []);

  return {
    geolocationState,
    getGeolocation,
    isLoadingGeoLocation
  };
};
