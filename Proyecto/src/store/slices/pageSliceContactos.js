import { createSlice } from '@reduxjs/toolkit';

export const pageSliceContactos = createSlice({
   name: 'pageSliceContactos',
   initialState: {
      data: 1,
   },
   reducers: {
      setPageSliceContactos: (state, action) => {
         state.data = action.payload;
      },
   },
});
export const { setPageSliceContactos } = pageSliceContactos.actions;

export default pageSliceContactos.reducer;
