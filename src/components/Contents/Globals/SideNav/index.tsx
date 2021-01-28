import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import NavItem from './NavItem';
import Profile from './Profile';

export type NavItemProps = {
  categoryName: string;
  categoryIcon?: IconProp;
  navItems: string[];
  accordion?: boolean;
}

type Props = {
  open: boolean;
  navItems: NavItemProps[];
}

const SideNav: React.FC<Props> = ({open, navItems}) => {
  return (
    <nav style={{height: '100%', backgroundColor: '#3C2F4B', color: '#FFF'}}>
      <Profile />
      <hr />
      {navItems.map((item, idx) => (
        <NavItem key={idx} navItem={item} />
      ))}
    </nav>
  );
}

export default SideNav;
