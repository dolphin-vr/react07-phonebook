import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
   name: 'contacts',
   initialState: {contacts: []},
   reducers: {
      addContact: {
         reducer(state, action){state.contacts.push(action.payload)},
         prepare(contact){
               return {payload: {
                  name: contact.name,
                  phone: contact.phone,}
               }}
      },
      deleteContact(state, action){
         state.contacts = state.contacts.filter(el => el.id !== action.payload);
      }
   }
});

 
export const contactsReducer = slice.reducer;

export const {addContact, deleteContact} = slice.actions;

export const getContacts = state=>state.contacts.contacts;