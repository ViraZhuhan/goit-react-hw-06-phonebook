import { createSlice } from '@reduxjs/toolkit';
import { defaultContacts  } from './defaultContacts ';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: defaultContacts,
  
  reducers: {
    addContact: (state, { payload }) => {
    return [...state, payload];
    },

    removeContact: (state, { payload }) => {
     return  state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
