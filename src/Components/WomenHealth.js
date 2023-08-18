import React,{useContext} from 'react';
import { Typography } from '@mui/material';
import {ProductContext} from '../ProductContext.js'
import ProductCardList from './ProductCardList.js';

const WomenHealthComponent = () => {
  const {whPackage,setWhPackage} = useContext(ProductContext);
  
  return (
    <div>
      <ProductCardList products={whPackage}/>
      {/* Render data related to Women Health Package */}
    </div>
  );
};

export default WomenHealthComponent;