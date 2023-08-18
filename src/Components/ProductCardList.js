import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductCardList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCardList;