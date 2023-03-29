import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background: #16171b;
  height: 100vh;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.65);
  margin-top: 138px;
  max-width: 256px;
  margin-left: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding-left: 20px;
  align-items: center;
  transition: 200ms ease;
  margin-bottom: 10px;
  height: 44px;
  width: 100%;

  display: flex;
  &.active {
    color: #ffffff;
    /* padding: 10px; */
    background: rgba(38, 38, 51, 1);
    border-radius: 6px;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
    scale: 1.05;
    transition-duration: 200ms;
  }
`;
