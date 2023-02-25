import { getTimestamp } from "./getTimestamp";

export const getGeolocation = async () => {
  const url = await fetch('https://geolocation-db.com/json/', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
   })
  const response = await url.json();
  localStorage.setItem( "geolocationHandler",JSON.stringify({...response,timestamp:getTimestamp()}));
};