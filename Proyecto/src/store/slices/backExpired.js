import { createSlice } from "@reduxjs/toolkit";

export const backExpired = createSlice({
  name: "backExpired",
  initialState: {
    data: false,
  },
  reducers: {
    setBackExpired: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setBackExpired } = backExpired.actions;

export default backExpired.reducer;
