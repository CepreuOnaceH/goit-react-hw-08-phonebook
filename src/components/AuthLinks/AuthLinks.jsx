import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RiLoginCircleFill } from 'react-icons/ri';

import { FaCashRegister } from 'react-icons/fa6';

const AuthLinksList = () => {
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    if (pathname === '/register') {
      setCurrentPage('register');
    } else if (pathname === '/login') {
      setCurrentPage('login');
    } else {
      setCurrentPage('');
    }
  }, [pathname]);

  return (
    <ul className="auth-list">
      <li>
        <Link
          to="/register"
          className={`auth-link ${currentPage === 'register' && 'active'}`}
        >
          <FaCashRegister size={24} />
          Registration
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          className={`auth-link ${currentPage === 'login' && 'active'}`}
        >
          <RiLoginCircleFill size={24} />
          Login
        </Link>
      </li>
    </ul>
  );
};

export default AuthLinksList;
