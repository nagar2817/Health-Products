import React,{useContext} from 'react';
import {ProductContext} from '../ProductContext.js'
import ProductCardList from './ProductCard/ProductCardList.js';


const WomenHealthComponent = () => {
  const {whPackage,setWhPackage} = useContext(ProductContext);
  
  return (
    <div>
      <ProductCardList products={whPackage}/>
    </div>
  );
};

export default WomenHealthComponent;