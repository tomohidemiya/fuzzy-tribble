import React, { useState } from 'react';
import NavItem from './NavItem';
import Profile from './Profile';
export type NavItem = {
  categoryName: string;
  categoryIcon?: JSX.Element;
  navItems: string[];
  accordion?: boolean;
}

type Props = {
  open: boolean;
  navItems: NavItem[];
}

const SideNav: React.FC<Props> = ({open, navItems}) => {
  return (
    <nav style={{backgroundColor: '#3C2F4B', color: '#FFF'}}>
      <Profile />
      <hr />
      {navItems.map(item => (
        <NavItem navItem={item} />
      ))}
    </nav>
  );
}

export default SideNav;
