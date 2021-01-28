import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Product } from '../../types/product';

type Props = {
  product: Product;
  onCardClick: (e: any) => any;
}

const ProductCard: React.FC<Props> = ({product, onCardClick}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={onCardClick}>
      <CardMedia
        className={classes.media}
        image={product.thumbnailUrl}
        title={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.summary}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));