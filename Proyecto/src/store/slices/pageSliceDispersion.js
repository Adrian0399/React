import { createSlice } from '@reduxjs/toolkit';

export const pageSliceDispersion = createSlice({
   name: 'pageSliceDispersion',
   initialState: {
      data: 1,
   },
   reducers: {
      setPageSliceDispersion: (state, action) => {
         state.data = action.payload;
      },
   },
});
export const { setPageSliceDispersion } = pageSliceDispersion.actions;

export default pageSliceDispersion.reducer;
