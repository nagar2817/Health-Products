import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CartButton = ({ Added, handleAddToCart, cartText }) => {
  return (
    <>
      {cartText !== 'cart' ? (
        Added ? (
          <Button variant="contained" color="success" component={Link} to="/cart">
            Go to Cart
          </Button>
        ) : (
          <Button variant="contained" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        )
      ) : (
        <Button variant="contained" color="success" component={Link} to="/cart">
          Go to Cart
        </Button>
      )}
    </>
  );
};

export default CartButton;
