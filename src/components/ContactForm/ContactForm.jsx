import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, AddButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmitData = ({ name, number }) => {
    const isFindName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isFindName) {
      alert(`${name} is already in contacts !`);
      return;
    } else {
      const newContacts = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(addContact(newContacts));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    formSubmitData({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}></Label>
      Name
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        id={nameInputId}
        pattern="^[A-z-А-я\s]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={numberInputId}></Label>
      Number
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        id={numberInputId}
        pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
}
