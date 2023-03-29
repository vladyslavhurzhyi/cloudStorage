import { Icon } from '@iconify-icon/react';
import React from 'react';
import { Header, Nav, NavLinkStyled } from './AppBar.styled';
import { Outlet } from 'react-router-dom';

const navItem = [
  { href: 'mycloud', text: 'My Cloud', icon: 'ic:round-home' },
  {
    href: 'shared-with-me',
    text: 'Shared with me',
    icon: 'mdi:folder-arrow-left',
  },
  {
    href: 'shared-with-others',
    text: 'Shared with others',
    icon: 'mdi:folder-arrow-right',
  },
  { href: 'favorites', text: 'Favorites', icon: 'ic:round-star' },
  { href: 'trash', text: 'Trash', icon: 'mdi:delete' },
];

export const AppBar = () => {
  return (
    <>
      <Header>
        <Nav>
          {navItem.map(({ href, text, icon }) => (
            <NavLinkStyled to={href} key={text}>
              <Icon
                icon={icon}
                width="24px"
                height="24px"
                style={{
                  marginRight: '12px',
                }}
              />
              {text}
            </NavLinkStyled>
          ))}
        </Nav>
      </Header>
      <Outlet></Outlet>
    </>
  );
};
