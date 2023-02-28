import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  color: 'black'
}

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
    reset : (state) => {
      state.value = initialState.value
      state.color = initialState.color
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer

