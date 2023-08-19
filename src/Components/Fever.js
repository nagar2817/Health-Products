import React,{useContext} from 'react';
import { Typography } from '@mui/material';
import {ProductContext} from '../ProductContext.js'
import ProductCardList from './ProductCard/ProductCardList.js';


const FeverComponent = () => {
  const {feverPackage,setFeverPackage} = useContext(ProductContext);

  return (
    <div style={{ marginTop: '20px' }}>
      <ProductCardList products={feverPackage}/>
    </div>
  );
};

export default FeverComponent; 