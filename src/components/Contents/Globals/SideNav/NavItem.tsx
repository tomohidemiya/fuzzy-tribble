import { Grid } from '@material-ui/core';
import React, { useState, useMemo } from 'react';
import { NavItemProps } from '.';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  navItem: NavItemProps;
}

const NaviItem: React.FC<Props> = ({navItem}) => {
  const [open, setOpen] = useState(true);
  const Icon = useMemo(() => (navItem.categoryIcon ? <FontAwesomeIcon icon={navItem.categoryIcon!} /> : <></>), [])
  const NavItems = useMemo(() => (
    navItem.navItems.map((item, idx) => (
      <Grid key={idx} container style={{paddingTop: '4px'}}>
        <Grid item xs={2} />
        <Grid item xs={8}>{item}</Grid>
        <Grid item xs={2} />
      </Grid>
    ))
  ), [])
  return (
    <Grid container style={{paddingTop: '8px'}}>
      <Grid item xs={2} style={{textAlign: 'center', paddingTop: '3px'}} >{Icon}</Grid>
      <Grid item xs={8}>{navItem.categoryName}</Grid>
      <Grid item xs={2}>{navItem.accordion ? (open ? (<ExpandLess onClick={() => setOpen(true)} />) : <ExpandMore  onClick={() => setOpen(false)}/>) : ''}</Grid>
      {open ? NavItems : <></>}
    </Grid>
  );
}

export default NaviItem;
