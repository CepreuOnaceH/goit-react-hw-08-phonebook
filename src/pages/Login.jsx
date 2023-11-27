import Container from 'components/Container/Container';
import LogForm from 'components/LogForm/LogForm';
import { LoegRegStyles } from './styles/LogRegStyles';
const LoginPage = () => {
  return (
    <LoegRegStyles>
      <Container>
        <LogForm />
      </Container>
    </LoegRegStyles>
  );
};

export default LoginPage;
