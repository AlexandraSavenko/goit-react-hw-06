import { createSlice } from "@reduxjs/toolkit";
export const filteredContacts = (state) => state.filters.filter;

const slice = createSlice({
  name: "filters",
  initialState: {
    filter: "",
  },
  reducers: {
    setFilteredContacts(state, action) {
      state.filter = action.payload;
      // return {
      //   ...state,
      //   filter: action.payload,
      // };
    },
  },
});
export const { setFilteredContacts } = slice.actions;

export default slice.reducer;
