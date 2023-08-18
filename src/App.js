import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/Home.js';
import WomenHealthComponent from './Components/WomenHealth.js';
import FeverComponent from './Components/Fever.js';
import CartComponent from './Components/CartComponent.js';

function App() {
  return (
    <div className="App">
          <HomeComponent /> 
        <Routes>
            <Route
              path="/"
              element={<HomeComponent/>}
            />
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
