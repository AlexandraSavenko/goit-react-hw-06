import { configureStore, createAction } from "@reduxjs/toolkit";
export const deleteContact = createAction("contacts/deleteContact");

export const addContact = createAction("contacts/addContact");
// export const addContact = (vId, vName, vNumb) => {
//   return {
//     type: "number/addContact",
//     payload: {
//       id: vId,
//       name: vName,
//       phoneNumber: vNumb,
//     },
//   };
// };

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/deleteContact":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "contacts/addContact":
      return { ...state, contacts: [...state.contacts, action.payload] };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});

// reducers: {
//  deleteContact: (state, action) => {
//   state.contacts = state.contacts.filter(el => [el.id](<http://el.id/>) !== action.payload)
//  },
//  addContact: (state, action) => {
//   state.contacts = [...state.contacts, action.payload]
//  },
// },
