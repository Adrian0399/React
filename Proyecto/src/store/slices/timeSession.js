import { createSlice } from "@reduxjs/toolkit";

export const timeSession = createSlice({
  name: "timeSession",
  initialState: {
    data: "",
  },
  reducers: {
    setTimeSession: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setTimeSession } = timeSession.actions;

export default timeSession.reducer;
