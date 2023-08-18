import React,{useContext} from 'react';
import { Typography } from '@mui/material';
import {ProductContext} from '../ProductContext.js'


const CartComponent = () => {
  const {cartTasks,setCartTasks} = useContext(ProductContext);

  return (
    <div>
      hi
    </div>
  );
};

export default CartComponent; 