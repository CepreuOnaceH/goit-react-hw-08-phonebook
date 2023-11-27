import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserName } from 'redux/auth/selectors';
import Container from 'components/Container/Container';
import { HomeStyles } from './styles/HomeStyles';
import { Link } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);

  return (
    <HomeStyles>
      <Container>
        <h1>Contacts book</h1>
        {isLoggedIn ? (
          <h2>
            Hello <span className="name">{userName} </span>, enter to your{' '}
            <Link className="link" to="/contacts">
              contacts{' '}
            </Link>
            to find or create your contacts
          </h2>
        ) : (
          <h2>
            You must to be{' '}
            <Link className="link" to="/login">
              logged in{' '}
            </Link>{' '}
            to see your contact's list. Or{' '}
            <Link className="link" to="register">
              create{' '}
            </Link>{' '}
            new accaunt.{' '}
          </h2>
          // <h2>
          //   Please{' '}
          //   <Link className="link" to="register">
          //     register{' '}
          //   </Link>{' '}
          //   or{' '}
          //   <Link className="link" to="/login">
          //     login{' '}
          //   </Link>{' '}
          //   to see your contacts
          // </h2>
        )}
      </Container>
    </HomeStyles>
  );
};

export default Home;
