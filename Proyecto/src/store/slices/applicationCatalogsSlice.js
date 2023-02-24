import { createSlice } from "@reduxjs/toolkit";

export const applicationCatalogsSlice = createSlice({
  name: "applicationCatalogsSlice",
  initialState: {
    applicationBanksList: [],
    applicationSendMoneyGetAuthorizersAndNotifiersList: {
      authorizer: [],
      notifiers: [],
    },
  },
  reducers: {
    setApplicationBankList: (state, action) => {
      state.applicationBanksList = action.payload;
    },
    setMoneyGetAuthorizersAndNotifiers: (state, action) => {
      state.applicationSendMoneyGetAuthorizersAndNotifiersList = action.payload;
    },
  },
});

export const { 
  setApplicationBankList,
  setMoneyGetAuthorizersAndNotifiers 
} = applicationCatalogsSlice.actions;

export default applicationCatalogsSlice.reducer;