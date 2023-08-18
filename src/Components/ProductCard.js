import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductCard = ({ name, description, price, extraFeatures }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {extraFeatures}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ProductCard;