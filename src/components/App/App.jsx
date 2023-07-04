import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import Title from '../Title';
import ContactForm from '../ContactForm';
import ContactsTitle from '../ContactsTitle';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactList';
import { Container } from './App.styled';

export default function App() {

  return (
    <Container>
      <Title title="Phonebook" />
      <ContactForm />
      <ContactsTitle title="Contacts" />
      <Filter />
      <ContactsList />
    </Container>
  );
}
