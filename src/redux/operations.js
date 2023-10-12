import { createAsyncThunk } from "@reduxjs/toolkit";
import { serviceAddContact, serviceChangeContact, serviceDeleteContact, serviceGetContacts } from "api/api";
import axios from "axios";
// import * as phonebookAPI from 'api/api.js';

axios.defaults.baseURL = "https://651e840444a3a8aa4768816b.mockapi.io/v1/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await serviceGetContacts();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await serviceAddContact(contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await serviceDeleteContact(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  "contacts/changeContact",
  async (contact, thunkAPI) => {
    try {
      const response = await serviceChangeContact(contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
