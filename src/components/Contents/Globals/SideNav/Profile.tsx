import React, { useState, useMemo } from 'react';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SideNav: React.FC = () => {
  const profileItem = {
    categoryIcon: faUserCircle,
    categoryName: 'Hisotsu病院',
    navItems: [
      {displayName: 'メッセージ', link: '/'},
      {displayName: 'マイページ', link: '/device/mypage'},
      {displayName: '設定', link: '/device/settings'},
    ]
  }
  const [expand, setExpand] = useState<boolean>(true);
  const Icon = useMemo(() => (profileItem.categoryIcon ? <FontAwesomeIcon icon={profileItem.categoryIcon!} /> : <></>), [])
  const ProfileItems = useMemo(() => (
    profileItem.navItems.map((item, idx) => (
      <Grid key={idx} container style={{paddingTop: '4px'}}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Link style={{color: '#FFF', textDecoration: 'none'}} to={item.link}>{item.displayName}</Link>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    ))
  ), [])
  
  return (
    <Grid container style={{paddingTop: '8px'}}>
      <Grid item xs={2} style={{textAlign: 'center', paddingTop: '3px'}} >{Icon}</Grid>
      <Grid item xs={8}>{profileItem.categoryName}</Grid>
      <Grid item xs={2}>{expand ? (<ExpandLess onClick={() => setExpand(true)} />) : (<ExpandMore  onClick={() => setExpand(false)}/>)}</Grid>
      {expand ? ProfileItems : <></>}
    </Grid>
  );
}

export default SideNav;
