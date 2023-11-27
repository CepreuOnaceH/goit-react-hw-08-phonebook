import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import LayOut from './LayOut/LayOut';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/operations';
import { useEffect, lazy } from 'react';
import PrivateRoute from './Routes/PrivatRoute';
import PublicRoute from './Routes/PublicRoute';
import { getIsLoadingAuthUser } from 'redux/auth/selectors';

const Contacts = lazy(() => import('../pages/Contacts'));
const Registration = lazy(() => import('../pages/Registration'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoadingAuthUser = useSelector(getIsLoadingAuthUser);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoadingAuthUser && (
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={<PrivateRoute component={Contacts} />}
          />
          <Route
            path="register"
            element={<PublicRoute component={Registration} />}
          />
          <Route path="login" element={<PublicRoute component={Login} />} />
        </Route>
      </Routes>
    )
  );
};
