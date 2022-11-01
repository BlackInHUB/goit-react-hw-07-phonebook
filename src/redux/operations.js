import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const data = await api.addContact(newContact);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const result = await api.deleteContact(id);
      return result;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
