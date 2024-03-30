import { configureStore, createSlice } from "@reduxjs/toolkit";
const webSlice = createSlice({
  name: "page",
  initialState: {
    fontColor: "#ffffff",
    backGroundColor: "000",
    title: "Ayda",
    navVisibility: true,
  },
  reducers: {
    changeFontColor: (state, action) => {
      state.fontColor = action.payload.fontColor;
      console.log(action);
    },
    changeBg: (state, action) => {
      state.backGroundColor = action.payload.backGroundColor;
    },
    changeTitle: (state, action) => {
      state.title = action.payload.title;
    },
    toggle: (state) => {
      state.navVisibility = !state.navVisibility;
    },
  },
});

export const { changeFontColor, changeBg, changeTitle, toggle } =
  webSlice.actions;

export const store = configureStore({
  reducer: {
    page: webSlice.reducer,
  },
});
