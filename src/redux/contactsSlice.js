import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { pendingCallback, rejectedCallback } from './helpers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: pendingCallback,
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: rejectedCallback,
    [addContact.pending]: pendingCallback,
    [addContact.fulfilled]: (store, { payload }) => {
      store.items.push(payload);
    },
    [addContact.rejected]: rejectedCallback,
    [deleteContact.pending]: pendingCallback,
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [deleteContact.rejected]: rejectedCallback,
  },
});

export default contactsSlice.reducer;
