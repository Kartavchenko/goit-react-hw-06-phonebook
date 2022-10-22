import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlise";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["search"],
};

const rootReducers = combineReducers({
  contacts: contactsReducer,
  search: filterReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducers),
  middleware(getDefaultMiddleware) {
      return  getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
  }
});

export const persistor = persistStore(store)