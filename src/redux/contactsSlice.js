import { createAction } from "@reduxjs/toolkit";
export const deleteContact = createAction("contacts/deleteContact");

export const addContact = createAction("contacts/addContact");

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

export default function contactsReducer(state = initialState.contacts, action) {
  console.log(state);

  switch (action.type) {
    case "contacts/deleteContact":
      return state.filter((contact) => contact.id !== action.payload);
    case "contacts/addContact":
      return [...state, action.payload];

    default:
      return state;
  }
}
