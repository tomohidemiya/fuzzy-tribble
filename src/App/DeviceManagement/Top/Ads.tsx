import { Grid, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import Products from '../../../services/Products';

const Ads: React.FC = () => {
  const recommendProducts = Products.getProductRecommends();

  return (
    <main>
      <Typography variant="h2" color="inherit">メーカーWeb勉強会</Typography>
      <Grid container>
        {recommendProducts.map((item, idx) => (
          <Grid item xs={4} key={idx}>

          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Ads;