import React,{createContext,useState} from 'react';
import {WomenData,FeverData} from './Data.js';
export const ProductContext = createContext();

const ProductProvider = ({children})=>{
  const [whPackage,setWhPackage] = useState(WomenData);
  const [feverPackage,setFeverPackage] = useState(FeverData);
  const [cartTasks,setCartTasks] = useState([]);
  return (
    <ProductContext.Provider value={{  
      whPackage,
      setWhPackage,
      feverPackage,
      setFeverPackage,
      cartTasks,
      setCartTasks 
    }}>
    {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider; 