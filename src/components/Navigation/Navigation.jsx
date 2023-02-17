import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selectors';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
const Navigation = () => {
  const token = useSelector(selectAuthToken);
  return (
   <>
    <nav>
      <ul>
        {!token ? (
          <>
            <li>
              <NavItem to="login">Login</NavItem>
            </li>
            <li>
              <NavItem to="register">Register</NavItem>
            </li>
          </>
        ) : (
          <li>
            <UserMenu/>
            <NavItem to="contacts">Contacts</NavItem>
          </li>
        )}
      </ul>
    </nav>
     <Suspense fallback={null}>
     <Outlet />
   </Suspense>
   </>
  );
};

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
`;

export default Navigation;
