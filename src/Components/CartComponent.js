import React,{useContext} from 'react';
import { Typography } from '@mui/material';
import {ProductContext} from '../ProductContext.js'
import ProductCardList from './ProductCardList.js';


const CartComponent = () => {
  const {cartTasks,setCartTasks} = useContext(ProductContext);

  return (
      <div>
      <ProductCardList products={cartTasks}/>
    </div>
  );
};

export default CartComponent; 