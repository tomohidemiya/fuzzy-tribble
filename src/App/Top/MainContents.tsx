import { Divider } from '@material-ui/core';
import React from 'react';
import RecommendProduct from './RecommendProduct';

type Props = {}

const MainContents: React.FC<Props> = () => {
  
  return (
    <div style={{padding: '16px'}}>
      <RecommendProduct />
      <Divider  variant='middle' />

    </div>
  );
}

export default MainContents;
