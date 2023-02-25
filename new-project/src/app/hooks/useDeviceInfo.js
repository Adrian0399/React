import { useEffect, useState } from "react";

export const useDeviceInfo = () => {

    const geolocationHandler = JSON.parse(localStorage.getItem("geolocationHandler"));
    const deviceIdHandler = JSON.parse(localStorage.getItem("deviceIdHandler"));
    const navigatorGeolocationHandler = JSON.parse(localStorage.getItem("navigatorGeolocationHandler"));

    const [deviceInfo, setdeviceInfo] = useState({
      deviceBrowser:  (deviceIdHandler?.deviceBrowser)?deviceIdHandler?.deviceBrowser:"Unknown Browser",
      deviceOs: (deviceIdHandler?.deviceOs)?deviceIdHandler?.deviceOs:"Unknown OS",
      deviceLatitude: (navigatorGeolocationHandler?.navitagorLatitud)?navigatorGeolocationHandler?.navitagorLatitud:'00.0000',
      deviceLongitude: (navigatorGeolocationHandler?.navitagorLongitud)?navigatorGeolocationHandler?.navitagorLongitud:'00.0000',
      deviceIp:(geolocationHandler?.IPv4)?geolocationHandler?.IPv4:'127.0.0.1'
    });
    
    useEffect(() => {
      
    }, [])

  return {
    deviceInfo
  }
}
