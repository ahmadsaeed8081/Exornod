import { createSlice } from "@reduxjs/toolkit";
const sidebar = localStorage.getItem("sidebar");

const globalReducer = createSlice({
  name: "global",
  initialState: {
    success: "",
    searchBar: false,
    openDashboardSidebar: sidebar ? sidebar : true,
  },
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setOpenDashboardSidebar: (state, action) => {
      state.openDashboardSidebar = action.payload;
    },

    clearMessage: (state) => {
      state.success = "";
    },
  },
});
export const {
  setSuccess,
  clearMessage,
  openDashboardSidebar,
  setOpenDashboardSidebar,
} = globalReducer.actions;
export default globalReducer.reducer;
