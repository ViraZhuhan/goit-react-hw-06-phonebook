import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import contactsSlice from './contacts/contactsSlice';
import filterSlice from './filter/filterSlice';


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store);