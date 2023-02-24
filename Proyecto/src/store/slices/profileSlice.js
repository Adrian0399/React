import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name:'profileSlice',
    initialState: {
        profile:{
        dateCreation:null,
        creationYear:null,
        crationMonth:null,
        sendingMoneyAuthorizer:false,
        isNational:true,
        isBritus:null,
        lastSession:null,
        updatedTerms:false,
        },
        catalogosGlobales:null
     },
     reducers:{
        setProfileInformation: (state,action) => {
            state.profile = action.payload;
        },
        setCatalogosGlobales: (state,action) => {
            state.catalogosGlobales = action.payload;
        }
     }

});

export const {setProfileInformation,setCatalogosGlobales} = profileSlice.actions;
export default profileSlice.reducer;
