import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
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

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "contacts/deleteContact":
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           (contact) => contact.id !== action.payload
//         ),
//       };

//     default:
//       return state;
//   }
// };

export const store = configureStore({
  reducer: { contacts: contactsReducer },
});

// reducers: {
//  deleteContact: (state, action) => {
//   state.contacts = state.contacts.filter(el => [el.id](<http://el.id/>) !== action.payload)
//  },
//  addContact: (state, action) => {
//   state.contacts = [...state.contacts, action.payload]
//  },
// },
