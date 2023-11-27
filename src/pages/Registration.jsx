import Container from 'components/Container/Container';
import RegForm from 'components/RegForm/RegForm';
import { RegFormStyles } from 'components/RegForm/RegFormStyles.styled';

const RegistrationPage = () => {
  return (
    <RegFormStyles>
      <Container>
        <RegForm />
      </Container>
    </RegFormStyles>
  );
};

export default RegistrationPage;
