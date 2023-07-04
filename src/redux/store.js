import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import contactsSlice from './contacts/contactsSlice';
import filterSlice from './filter/filterSlice';


const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
})


export const store = configureStore({
  reducer: rootReducer,
})