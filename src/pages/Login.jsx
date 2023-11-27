import Container from 'components/Container/Container';
import LogForm from 'components/LogForm/LogForm';
import { LogRegStyles } from './styles/LogRegStyles';
const Login = () => {
  return (
    <LogRegStyles>
      <Container>
        <LogForm />
      </Container>
    </LogRegStyles>
  );
};

export default Login;
