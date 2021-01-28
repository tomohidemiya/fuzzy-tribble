import { Grid, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import ProductCard from '../../components/Product/ProductCard';
import Products from '../../services/Products';

const RecommendProduct: React.FC = () => {
  const recommendProducts = Products.getProductRecommends();
  const history = useHistory();

  return (
    <main>
      <Typography variant="h6" color="inherit">あなたの病院におすすめ</Typography>
      <Grid container style={{margin: '16px'}}>
        {recommendProducts.map((item, idx) => (
          <Grid item xs={4} key={idx}>
            <ProductCard product={item} onCardClick={() => history.push(`/products/${item.id}`)} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default RecommendProduct;