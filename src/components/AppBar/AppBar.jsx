// import { Box } from '@chakra-ui/react';
import React from 'react';
import { Header, Nav, NavLinkStyled } from './AppBar.styled';
import { AiFillHome } from 'react-icons/ai';
import {
  RiFolderReceivedFill,
  RiFolderSharedFill,
  RiStarFill,
  RiDeleteBin7Fill,
} from 'react-icons/ri';
import { Outlet } from 'react-router-dom';

const navItem = [
  { href: 'mycloud', text: 'My Cloud', icon: AiFillHome },
  {
    href: 'shared-with-me',
    text: 'Shared with me',
    icon: RiFolderReceivedFill,
  },
  {
    href: 'shared-with-others',
    text: 'Shared with others',
    icon: RiFolderSharedFill,
  },
  { href: 'favorites', text: 'Favorites', icon: RiStarFill },
  { href: 'trash', text: 'Trash', icon: RiDeleteBin7Fill },
];

export const AppBar = () => {
  return (
    <>
      <Header>
        <Nav>
          {navItem.map(({ href, text, icon: Icon }) => (
            <NavLinkStyled to={href} key={text}>
              <Icon size={28} />
              {text}
            </NavLinkStyled>
          ))}
        </Nav>
      </Header>
      <Outlet></Outlet>
    </>
  );
};
