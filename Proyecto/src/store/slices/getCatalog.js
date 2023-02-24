import { createSlice } from '@reduxjs/toolkit';

export const getCatalog = createSlice({
    name:'getCatalog',
    initialState: {
        catalogosGlobales:null
     },
     reducers:{
        setCatalogosGlobales: (state,action) => {
            state.catalogosGlobales = action.payload;
        }
     }

});

export const {setCatalogosGlobales} = getCatalog.actions;
export default getCatalog.reducer;
