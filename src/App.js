import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/Home.js';
import WomenHealthComponent from './Components/WomenHealth.js';
import FeverComponent from './Components/Fever.js';

function App() {
  return (
    <div className="App">
          <HomeComponent /> 
        <Routes>
            <Route
              path="/"
              component={HomeComponent}
            />
            <Route
              path="/women-health-package"
              component={WomenHealthComponent}
            />
            <Route path="/fever-package" component={FeverComponent} />
        </Routes>

    </div>
  );
}

export default App;
