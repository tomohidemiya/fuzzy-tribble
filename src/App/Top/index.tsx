import { Grid } from '@material-ui/core';
import React, {useState} from 'react';
import Header from '../../components/Contents/Globals/Header';
import SideNav from '../../components/Contents/Globals/SideNav';
import MainContents from './MainContents';

type Props = {}

const Top: React.FC<Props> = () => {
  const [open, setOpen] = useState(true)
  const navItems = [
    {
      categoryName: 'メンション＆リアクション',
      navItems: [],
    },
    {
      categoryName: 'お気に入り製品',
      navItems: [],
    },
    {
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
    <>
      <Header actions={actions} />
      <Grid xs={2} style={{height: '100%'}}>
        <SideNav open={open} navItems={navItems}/>
      </Grid>
      <Grid xs={10}>
        <MainContents />
      </Grid>
    </>
  );
}

export default Top;
