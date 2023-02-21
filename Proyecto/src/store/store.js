

import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './slices/counterSlice'
import formSlice from './slices/formSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    formSlice,
  },
})