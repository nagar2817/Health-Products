import React,{createContext,useState} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children})=>{
  const [whPackage,setWhPackage] = useState();
  const [feverPackage,setFeverPackage] = useState();
  const [cartTasks,setCartTasks] = useState();
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