import React,{useContext} from 'react';
import {ProductContext} from '../ProductContext.js'
import ProductCardList from './ProductCard/ProductCardList.js';


const WomenHealthComponent = () => {
  const {whPackage,setWhPackage} = useContext(ProductContext);
  
  return (
    <div style={{ marginTop: '20px' }}>
      <ProductCardList products={whPackage}/>
    </div>
  );
};

export default WomenHealthComponent;