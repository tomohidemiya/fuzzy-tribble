import { Typography } from '@material-ui/core';
import React from 'react';
import DeviceList from './DeviceList';

type Props = {}

const Management: React.FC<Props> = () => {
  return (
    <div style={{height: '100%'}}>
      <div style={{padding: '16px'}}>
        <Typography variant="h6" color="inherit">機器管理</Typography>
        <DeviceList />
      </div>
    </div>
  );
}

export default Management;
