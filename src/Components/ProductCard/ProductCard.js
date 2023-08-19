import React,{useContext} from 'react';
import { Box,Card, CardContent, Typography,Button } from '@mui/material';
import {ProductContext} from '../../ProductContext.js';
import { Link,useParams } from 'react-router-dom';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import Tags from '../Tags.js';


const ProductCard = ({ name, tags, description, price, extraFeatures,Added }) => {
  const {cartTasks,setCartTasks,setWhPackage,setFeverPackage,feverPackage,whPackage} = useContext(ProductContext);
  const path = window.location.pathname;
const cartText = path.split('/').pop();
// console.log(cartText); // "cart"
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
    
    const newFeverPackage = feverPackage.map((task) => {
      if (task.name === name) {
        return { ...task, Added: true };
      }
      return task;
    });
    setFeverPackage(newFeverPackage);

    const newWhPackage = whPackage.map((task) => {
      if (task.name === name) {
        return { ...task, Added: true };
      }
      return task;
    });
    setWhPackage(newWhPackage);

  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: '8px' }}>
        {tags.map((tag) => (
    
            <Tags tag={tag} />

))}
</Box>
        <Typography variant="body2" color="text.secondary"
         sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1px',
          fontWeight: 'bold',
        }} >
           Price : <CurrencyRupeeRoundedIcon sx={{ fontSize: 'small' }} />
            {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {extraFeatures}
        </Typography>

        { cartText !== "cart" ? 
        (Added ? 
          (
            <Button variant="outline" color="success" component={Link} to="/cart">
              Go to Cart
            </Button>
          ) :
          (
          <Button variant="contained" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          )
          )
        : "" }
      </CardContent>
    </Card>
  );
};
export default ProductCard;