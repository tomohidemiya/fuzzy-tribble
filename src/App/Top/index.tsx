import { Grid } from '@material-ui/core';
import React, {useState} from 'react';
import Header from '../../components/Contents/Globals/Header';
import SideNav from '../../components/Contents/Globals/SideNav';
import MainContents from './MainContents';
import {faShuttleVan, faBookmark, faSync, faClone} from '@fortawesome/free-solid-svg-icons';

type Props = {}

const Top: React.FC<Props> = () => {
  const [open, setOpen] = useState(true)
  const navItems = [
    {
      categoryIcon: faShuttleVan,
      categoryName: '納品',
      navItems: [],
    },
    {
      categoryIcon: faBookmark,
      categoryName: '機器管理',
      navItems: [],
    },
    {
      categoryIcon: faSync,
      categoryName: '買い替え',
      navItems: [],
    },
    {
      categoryIcon: faClone,
      categoryName: 'カテゴリー',
      navItems: [
        '# 血液浄化',
        '# 心臓カテーテル',
      ],
    }
  ]

  const actions = {
    clickMenu: () => (setOpen(!open))
  }

  return (
    <div style={{height: '100%'}}>
      <Header actions={actions} />
      <Grid container style={{height: '100%'}}>
        <Grid item xs={2} style={{height: '100%'}}>
          <SideNav open={open} navItems={navItems}/>
        </Grid>
        <Grid item xs={10}>
          <MainContents />
        </Grid>
      </Grid>
    </div>
  );
}

export default Top;
