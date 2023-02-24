import { createSlice } from "@reduxjs/toolkit";

export const reditRedirectView = createSlice({
  name: "reditRedirectView",
  initialState: {
    data: {},
  },
  reducers: {
    setReditRedirectView: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setReditRedirectView } = reditRedirectView.actions;

export default reditRedirectView.reducer;
