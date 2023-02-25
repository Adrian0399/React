import { getAuthenticationToken } from "./encrypRSA";
import { getDeviceInfo } from "./getDeviceInfo";


export const getToken = async () => {

  const deviceInfo = getDeviceInfo();

  let apiKEY = import.meta.env.VITE_KLU_API_KEY;
  let deviceId = deviceInfo.deviceId;

  const request = {
    authentication: getAuthenticationToken({apiKEY, deviceId})
  };

  const body = {
    method: "POST",
    credentials: "omit",
    body: JSON.stringify(request),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
  };
  const url = await fetch(
    `${import.meta.env.VITE_KLU_API}Token`,
    body
  );
  const result = await url.json();
  const response = JSON.parse(result);
  const { code, data } = response;
  const tokenHerror = "200" != code ? true : false;


  return {
    token: data.token,
    tokenHerror,
    deviceId:deviceInfo.deviceId,
  };
};
