import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    formulario: null
  },
  reducers: {
    setFormSlice: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFormSlice } = formSlice.actions;
export default formSlice.reducer;