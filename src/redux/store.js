import { configureStore } from "@reduxjs/toolkit";
const deleteContact = (vId, vName, vNumb) => {
  return {
    type: "number/deleteContact",
    patload: {
      id: vId,
      name: vName,
      phoneNumber: vNumb,
    },
  };
};

const addContact = (vId, vName, vNumb) => {
  return {
    type: "number/addContact",
    patload: {
      id: vId,
      name: vName,
      phoneNumber: vNumb,
    },
  };
};

const initialState = {
  number: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
