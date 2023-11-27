import Container from 'components/Container/Container';
import RegForm from 'components/RegForm/RegForm';
import { LoegRegStyles } from './styles/LogRegStyles';
const LoginPage = () => {
  return (
    <LoegRegStyles>
      <Container>
        <RegForm />
      </Container>
    </LoegRegStyles>
  );
};

export default LoginPage;
