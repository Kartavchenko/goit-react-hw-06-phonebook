import { configureStore } from "@reduxjs/toolkit";
import { storageReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlise";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

export const store = configureStore({
  reducer: {
    contacts: storageReducer,
    search: filterReducer,
  },
  middleware(getDefaultMiddleware) {
      return  getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
  }
});

export const persistor = persistStore(store)
