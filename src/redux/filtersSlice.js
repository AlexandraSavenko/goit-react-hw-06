import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filter: "",
  },
  reducers: {
    setFilteredContacts(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});
export const { setFilteredContacts } = slice.actions;

export default slice.reducer;
