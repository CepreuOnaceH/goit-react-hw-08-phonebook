import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';
import Navigation from 'components/Navigation/Navigation';
import Menu from 'components/Menu/Menu';
import AuthLinks from 'components/AuthLinks/AuthLinks';
import Container from 'components/Container/Container';
import { AppBarStyle } from './AppBarStyles.styled';

const AppBar = () => {
  const isLoggedin = useSelector(getIsLoggedIn);
  return (
    <AppBarStyle>
      <Container>
        <Navigation />
        {!isLoggedin && <AuthLinks />}
        {isLoggedin && <Menu />}
      </Container>
    </AppBarStyle>
  );
};

export default AppBar;
