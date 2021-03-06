import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
// import { Link } from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.name}
          </Typography>
          <Typography gutterBottom variant='h5' component='h2'>
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          style={{ padding: '.5rem 1rem', textAlign: 'center' }}
          variant='body2'
          color='white'
          component='p'
          // component={Link}
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Typography
          varian='h3'
          onClick={handleAddToCart}
          className={classes.addToCart}
        >
          Add To Cart
        </Typography>
        <IconButton aria-label='Add to Cart' onClick={handleAddToCart}>
          <AddShoppingCart color='white' />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
