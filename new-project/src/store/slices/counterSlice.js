import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
     color: 'black'
  },
  reducers: {
    increment: (state) => {

      state.value += 1
       state.color = 'green'
    },
    decrement: (state) => {
      state.value -= 1
       state.color = 'red'
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
       state.color = 'blue'
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

