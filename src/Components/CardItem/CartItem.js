import React, { useContext } from 'react';
import { ListItem, ListItemText, Typography, Button } from '@mui/material';
import { ProductContext } from '../../ProductContext.js';
import './CartItem.css';

const CartItem = ({ item,index }) => {
  const { cartTasks, setCartTasks, feverPackage, setFeverPackage, whPackage, setWhPackage } = useContext(ProductContext);

  const removeFromCart = () => {
    const newCartTasks = cartTasks.filter((task) => task.name !== item.name);
    setCartTasks(newCartTasks);

    feverPackage.map((task, index) => {
      if (task.name === item.name) {
        feverPackage[index].Added = false;
        setFeverPackage([...feverPackage]);
      }
    });

    whPackage.map((task, index) => {
      if (task.name === item.name) {
        whPackage[index].Added = false;
        setWhPackage([...whPackage]);
      }
    });
  };

  return (
    <ListItem key={index} className="cart-item">
        <ListItemText
            className="cart-item-text"
            primary={<Typography className="cart-item-name">{item.name}</Typography>}
            secondary={
                <>
                  <Typography className="cart-item-price">Price: {item.price} rupees</Typography>
                  <Button variant="contained" onClick={()=>removeFromCart(item.name)}> Remove </Button>
                </>
                }
        />
    </ListItem>
  );
};

export default CartItem;