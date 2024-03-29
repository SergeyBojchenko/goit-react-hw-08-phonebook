import Container from '../Components/Container/Container';
import Form from '../Components/Form/Form';
import Contacts from '../Components/Contacts/Contacts';
import Filter from '../Components/Filter/Filter';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../redux/contacts';


function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(ContactsView);