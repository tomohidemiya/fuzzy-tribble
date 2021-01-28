import { Grid } from '@material-ui/core';
import React, { useState, useMemo } from 'react';
import { NavItem } from '.';
import {ExpandLess, ExpandMore} from '@material-ui/icons';

type Props = {
  navItem: NavItem;
}

const NaviItem: React.FC<Props> = ({navItem}) => {
  const [open, setOpen] = useState(true);
  const NavItems = useMemo(() => (
    navItem.navItems.map((item) => (
      <>
        <Grid item xs={2} />
        <Grid item xs={8}>{item}</Grid>
        <Grid item xs={2} />
      </>
    ))
  ), [])
  return (
    <Grid container >
      <Grid item xs={2}>{navItem.categoryIcon}</Grid>
      <Grid item xs={8}>{navItem.categoryName}</Grid>
      <Grid item xs={2}>{navItem.accordion ? (open ? (<ExpandLess onClick={() => setOpen(true)} />) : <ExpandMore  onClick={() => setOpen(false)}/>) : ''}</Grid>
      {open ? NavItems : <></>}
    </Grid>
  );
}

export default NaviItem;
