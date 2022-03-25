import ContactsItem from 'components/ContactsItem';
import { List } from './Contacts.styled';
import { useGetContactsQuery } from 'redux/contacts';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/contacts';

export default function Contacts() {
  const filter = useSelector(selectors.getFilter);

  const { data, error, isFetching } = useGetContactsQuery();

  const filteredContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  if (error) return <h1>Oooops... We have error: {error.data}.</h1>;

  return (
    <List>
      {data && !isFetching ? (
        filteredContacts().map(contact => (
          <ContactsItem key={contact.id} contact={contact} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </List>
  );
}
