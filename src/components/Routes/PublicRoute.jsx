import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/selectors';

const PublicRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <>{isLoggedIn ? <Navigate to="/contacts" /> : <Component />}</>;
};

export default PublicRoute;
