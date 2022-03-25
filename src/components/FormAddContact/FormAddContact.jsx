import React, { useState } from 'react';
import { Form, Container, Button } from './FormAddContact.styled';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contacts';

export default function FormAddContact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact, { isLoading, isError, error }] = useAddContactMutation();
  const {
    data,
    isError: isErrorQuery,
    error: errorQuery,
  } = useGetContactsQuery();

  const handleContactInput = ({ currentTarget }) => {
    const { value, name } = currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'phone':
        setPhone(value);
        return;
      default:
        return;
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();

    if (isErrorQuery) return reset();

    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }

    addContact({ name, phone });
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  if (isError || isErrorQuery)
    return <h1>Ooops... We have error: {error?.data || errorQuery.data}.</h1>;

  return (
    <Form onSubmit={onSubmit}>
      <Container>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleContactInput}
        />
      </Container>
      <Container>
        <p>Phone</p>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleContactInput}
        />
      </Container>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Add contact'}
      </Button>
    </Form>
  );
}
