import { configureStore } from "@reduxjs/toolkit"

import backExpired from "../store/slices/backExpired";
import interactionCenterSlice from "../store/slices/interactionCenterSlice";
import userData from "./slices/userData";
import counterSlice from "./slices/counterSlice";
import profileSlice from "../store/slices/profileSlice";


export const store = configureStore({
    reducer: {
        backExpired,
        interactionCenterSlice,
        userData,
        counter: counterSlice,
        profileSlice,
    },
}) ;
