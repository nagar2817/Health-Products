import React, { useContext } from 'react';
import { Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { ProductContext } from '../ProductContext.js';
import './CartComponentStyle.css';

const CartComponent = () => {
  const { cartTasks,setCartTasks } = useContext(ProductContext);
  const totalCost = cartTasks.reduce((acc, curr) => acc + parseInt(curr.price), 0);
  
  const removeFromCart = (name) => {
    const newCartTasks = cartTasks.filter((task) => task.name !== name);
    setCartTasks(newCartTasks);
  }

  return (
    <>
      {cartTasks.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <>
          <div style={{ display: 'flex' }}>
          <List className="cart-list" style={{ width: '70%', marginRight: 'auto' }}>
            {cartTasks.map((item, index) => (
              <>
              <ListItem key={index} className="cart-item">
                <ListItemText
                  className="cart-item-text"
                  primary={<Typography className="cart-item-name">{item.name}</Typography>}
                  secondary={
                    <>
                      <Typography className="cart-item-price">Price: {item.price} rupees</Typography>
                      <Button onClick={()=>removeFromCart(item.name)}> Remove </Button>
                    </>
                  }
                />
              </ListItem>
              <Divider />
              </>
            ))}
          </List>
          <div style={{ width: '30%', marginLeft: 'auto', textAlign: 'right' }} >
          <Typography className="cart-total" variant="h6">
            Total cost: {totalCost} rupees
          </Typography>
          <div className="cart-checkout">
            <Button variant="contained">Checkout</Button>
          </div>
          </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartComponent;