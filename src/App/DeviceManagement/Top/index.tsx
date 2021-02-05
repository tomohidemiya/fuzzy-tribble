import React from 'react';
import { Divider } from '@material-ui/core';
import RecommendProduct from './RecommendProduct';

type Props = {}

const Top: React.FC<Props> = () => {
  return (
    <div style={{height: '100%'}}>
      <div style={{padding: '16px'}}>
        <RecommendProduct />
        <Divider  variant='middle' />
      </div>
    </div>
  );
}

export default Top;
