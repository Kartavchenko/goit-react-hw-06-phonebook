import { createSlice } from '@reduxjs/toolkit';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      state.push(payload);
    },
    removeContact(state, { payload }) {
      return state.filter(item => item.id !== payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
}

export const storageReducer = persistReducer(persistConfig, contactsSlice.reducer)
