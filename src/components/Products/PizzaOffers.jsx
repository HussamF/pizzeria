import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useGlobalContext } from '../../context';
import Product from './Product/Product';
import useStyles from './styles';

const PizzaOffers = () => {
  const classes = useStyles();
  const { products, handleAddToCart } = useGlobalContext();
  if (!products.length) return <p>Loading...</p>;
  console.log(products);
  return (
    <main className={classes.content} style={{ background: '#fff' }}>
      <div className={classes.toolbar} />
      <h2
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: 'clamp(3rem, 5vw, 5rem)',
          textShadow: '0px -3px 4px rgba(150, 150, 150, 1)',
        }}
      >
        Today's Pizza Offers
      </h2>
      <div className={classes.toolbar} />

      <Grid container justify='center' spacing={3}>
        {products.map((product) => {
          if (
            product.categories.find(
              (category) => category.slug === 'pizza-offers'
            )
          ) {
            return (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={handleAddToCart} />
              </Grid>
            );
          }
          // if (
          //   product.categories.find(
          //     (category) => category.slug === 'pizza-menu'
          //   )
          // ) {
          //   return (
          //     <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          //       <PizzaMenu product={product} onAddToCart={handleAddToCart} />
          //     </Grid>
          //   );
          // }
        })}
      </Grid>
      <div className={classes.toolbar} />
    </main>
  );
};

export default PizzaOffers;
