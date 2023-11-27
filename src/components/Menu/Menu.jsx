import { getUserEmail, getIsPending } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/operations';
import { PiSpinnerGap } from 'react-icons/pi';
import { BiLogOut } from 'react-icons/bi';
import { MenuStyles } from './MenuStyles.styled';

const Menu = () => {
  const dispatch = useDispatch();
  const isPending = useSelector(getIsPending);
  const userEmail = useSelector(getUserEmail);

  const onLogOutClick = () => {
    dispatch(operations.logOut());
  };

  return (
    <MenuStyles className="user-menu-list">
      <li>
        <p className="user-email">{userEmail}</p>
      </li>
      <li>
        <button type="button" onClick={onLogOutClick}>
          {isPending ? (
            <PiSpinnerGap className="spinner" size={16} />
          ) : (
            <BiLogOut size={16} />
          )}
          Logout
        </button>
      </li>
    </MenuStyles>
  );
};

export default Menu;
