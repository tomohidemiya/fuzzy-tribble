import { Typography } from '@material-ui/core';
import React from 'react';

type Props = {}

const Delivery: React.FC<Props> = () => {
  return (
    <div style={{height: '100%'}}>
      <div style={{padding: '16px'}}>
        <Typography variant="h6" color="inherit">納品</Typography>
      </div>
    </div>
  );
}

export default Delivery;
