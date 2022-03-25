import React from 'react';
import FormAddContact from 'components/FormAddContact';
import FindContact from 'components/FindContact';
import Contacts from 'components/Contacts';
import Title from 'components/TemplateTitle';

export default function App() {
  return (
    <>
      <Title title="Phonebook" />
      <FormAddContact />
      <Title title="Contacts" />
      <FindContact />
      <Contacts />
    </>
  );
}
