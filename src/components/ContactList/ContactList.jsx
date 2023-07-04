import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsSlice';

export default function ContactsList () {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
        {getVisibleContacts().map(({ name, number, id }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Button onClick={() => dispatch(removeContact(id))}>Delete</Button>
          </Item>
        ))}
      </List>
  )
}



