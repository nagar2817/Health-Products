import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComponent from './Components/Home';
import WomenHealthComponent from './Components/WomenHealth';
import FeverComponent from './Components/Fever';
import ProductProvider from './ProductContext.js';


function App() {
  return (
    <div className="App">
    <ProductProvider>
      <Router>
      <HomeComponent />
        <Switch>
          <Route path="/women-health-package" component={WomenHealthComponent} />
          <Route path="/fever-package" component={FeverComponent} />
        </Switch>
      </Router>
      </ProductProvider>
    </div>
  );
}

export default App;