import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavItem to="login">Login</NavItem>
        </li>
        <li>
          <NavItem to="register">Register</NavItem>
        </li>
        <li>
          <NavItem to="contacts">Contacts</NavItem>
        </li>
      </ul>
    </nav>
  );
};

const NavItem = styled(NavLink)`
text-decoration: none;
color: black;
&.active{
    color:red;
}
`

export default Navigation;
