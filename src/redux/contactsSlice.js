import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, changeContact } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    [changeContact.pending]: handlePending,
    [changeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [changeContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const slice = createSlice({
//    name: 'contacts',
//    initialState:{
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//    reducers: {
//       addContact: {
//          fetchingPending(state) {
//            state.isLoading = true;
//          },
//          fetchingSuccess(state, action) {
//            state.isLoading = false;
//            state.error = null;
//            state.items = action.payload;
//          },
//          fetchingError(state, action) {
//            state.isLoading = false;
//            state.error = action.payload;
//          },
//        },
//       deleteContact(state, action){
//          state.contacts = state.contacts.filter(el => el.id !== action.payload);
//       }
//    }
// });

 
// export const contactsReducer = slice.reducer;

// export const {addContact, deleteContact} = slice.actions;
