export const getDeviceInfo = () => {
  const deviceIdHandler = JSON.parse(localStorage.getItem("deviceIdHandler"));
  if (!deviceIdHandler) {
    let dateTime = new Date().getTime();
    let characters =
      (Math.random() + 1).toString(36).substring(7) +
      "-" +
      (Math.random() + 1).toString(36).substring(7) +
      "-" +
      (Math.random() + 1).toString(36).substring(7) +
      "-" +
      (Math.random() + 1).toString(36).substring(7) +
      "-" +
      (Math.random() + 1).toString(36).substring(7);
    let deviceId = dateTime + "-" + characters;
    let deviceOs = getSO();
    let deviceBrowser = getBrowser();
    localStorage.setItem(
      "deviceIdHandler",
      JSON.stringify({ deviceId, deviceOs, deviceBrowser })
    );
    return deviceIdHandler;
  }
  return deviceIdHandler;
};

const getBrowser = () => {
  return navigator.appCodeName;
};

const getSO = () => {
  let OSName = "Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
  if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
  if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
  if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
  return OSName;
};
