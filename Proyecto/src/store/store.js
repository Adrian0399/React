import { configureStore } from "@reduxjs/toolkit";
import pageSliceDispersion from "../store/slices/pageSliceDispersion";
import pageSliceContactos from "../store/slices/pageSliceContactos";
import backExpired from "../store/slices/backExpired";
import timeSession from "../store/slices/timeSession";
import profileSlice from "../store/slices/profileSlice";
// import sendMoneySlice from "../store/slices/sendMoneySlice";
// import movementsSlice from "../store/slices/movementsSlice";
// import depositSlipSlice from "../store/slices/depositSlipSlice";
import interactionCenterSlice from "../store/slices/interactionCenterSlice";
// import servicePaySlice from "../store/slices/servicePaySlice";
import applicationCatalogsSlice from "../store/slices/applicationCatalogsSlice";
import reditRedirectView from "../store/slices/reditRedirectView";
import userData from "./slices/userData";
import getCatalog from "./slices/getCatalog";
import counterSlice from "./slices/counterSlice";


export const store = configureStore({
  reducer: {
    reditRedirectView,
    pageSliceDispersion,
    pageSliceContactos,
    backExpired,
    timeSession,
    profileSlice,
    interactionCenterSlice,
    applicationCatalogsSlice,
    userData,
    getCatalog,
    counter: counterSlice,

  },
});
