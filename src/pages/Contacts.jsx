import List from 'components/List/List';
import Searching from 'components/Searching/Searching';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import Container from 'components/Container/Container';
import { ContactsStyles } from './styles/ContactsStyles.styled';

const Contacts = () => {
  return (
    <ContactsStyles>
      <Container>
        <ContactsForm />
        <Searching />
        <List />
      </Container>
    </ContactsStyles>
  );
};

export default Contacts;
