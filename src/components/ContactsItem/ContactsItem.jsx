import { Item } from './ContactsItem.styled';
import propTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts';

export default function ContactsItem({ contact }) {
  const [deleteContact, { isError, error }] = useDeleteContactMutation();

  const { id, name, phone } = contact;

  if (isError)
    alert(`Oooops... We could not delete card. Error: ${error.data}.`);

  return (
    <Item>
      <p>{name}:</p>
      <p>{phone}</p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </Item>
  );
}

ContactsItem.propTypes = {
  contact: propTypes.object.isRequired,
};
