export const deleteFilesLogoff = () => {
  localStorage.removeItem("userLogged");
  localStorage.removeItem("geolocationHandler");
  localStorage.removeItem("idDispersion");
  localStorage.removeItem("tempUserLogin");
  localStorage.removeItem("userCreationDate");
  localStorage.removeItem("sendingMoneyAuthorizer");
  localStorage.removeItem("navigatorGeolocationHandler");
};
