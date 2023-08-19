import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import WomenHealthComponent from './Components/WomenHealth.js';
import FeverComponent from './Components/Fever.js';
import CartComponent from './Components/CartList/CartComponent.js';
import Header from './Components/Header.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
        {/* <HomeComponent />  */}
        <Routes>
            <Route
              path="/women-health-package"
              element={<WomenHealthComponent/>}
            />
            <Route path="/fever-package" element={<FeverComponent/>} />
            <Route path="/cart" element={<CartComponent/>} />
    
        </Routes>

    </div>
  );
}

export default App;
