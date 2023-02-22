

import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './slices/counterSlice'
import formSlice from './slices/formSlice'
import interactionCenterSlice from './slices/interactionCenterSlice'
import backExpired from './slices/backExpired'
import userData from './slices/userData'



export const store = configureStore({
  reducer: {
    counter: counterSlice,
    formSlice,
    backExpired,
    interactionCenterSlice,
    userData,

  },
})