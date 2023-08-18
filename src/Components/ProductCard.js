import React,{useContext} from 'react';
import { Card, CardContent, Typography,Button } from '@mui/material';
import {ProductContext} from '../ProductContext.js';

const ProductCard = ({ name, description, price, extraFeatures }) => {
  const {cartTasks,setCartTasks} = useContext(ProductContext);
  const handleAddToCart = () => {
    // Create a new task object with the product details
    const newTask = {
      name,
      description,
      price,
      extraFeatures
    };

    // Add the new task to the cartTasks list
    setCartTasks([...cartTasks, newTask]);
  };
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
        <Button variant="contained" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProductCard;