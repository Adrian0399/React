import { createSlice } from '@reduxjs/toolkit';


export const interactionCenterSlice = createSlice({
   name: 'interactionCenterSlice',
   initialState: {
        loaderShowState: false,
        toastConfig:{
            status:'200',
            mensaje:'Accion realizada.',
            show:false
        }
   },
   reducers: {
    setLoaderShowState:(state, action) => {
        state.loaderShowState = action.payload;
    },
    setToastMessage:(state,action)=>{
      state.toastConfig = {...action.payload,show:true};
    },
    setShow:(state,action)=>{
     state.toastConfig.show = action.payload;
    },
   },
});

export const { setLoaderShowState,setToastMessage,setShow } = interactionCenterSlice.actions;
export default interactionCenterSlice.reducer;