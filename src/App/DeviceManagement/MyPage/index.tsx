import { Typography } from '@material-ui/core';
import React from 'react';
import Channel from './Channel';
import FavoriteCompany from './FavoriteCompany';
import HospitalInfo from './HospitalInfo';
import SalesAgency from './SalesAgency';

type Props = {}

const MyPage: React.FC<Props> = () => {
  return (
    <div style={{height: '100%'}}>
      <div style={{padding: '16px'}}>
        <Typography variant="h6" color="inherit">マイページ</Typography>
        <HospitalInfo />
        <Channel />
        <FavoriteCompany />
        <SalesAgency />
      </div>
    </div>
  );
}

export default MyPage;
