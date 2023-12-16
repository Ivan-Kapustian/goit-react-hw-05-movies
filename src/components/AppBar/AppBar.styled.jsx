import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #ac8e8e;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
`;

export const Nav = styled.nav`
  margin-bottom: 20px;
  padding: 20px 0;
  max-width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-around;
`;

export const NavItemLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid white;
  border-radius: 4px;
  text-decoration: none;
  color: #300a89;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #300a89;
  }
`;
