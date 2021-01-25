import { Grid } from '@material-ui/core';
import React, {useState} from 'react';
import Header from '../../components/Contents/Globals/Header';
import SideNav from '../../components/Contents/Globals/SideNav';

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

  return (
    <>
      <Header />
      <Grid xs={2}>
        <SideNav open={open} navItems={navItems}/>
      </Grid>
    </>
  );
}

export default Top;
