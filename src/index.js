import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductProvider from './ProductContext.js';
import './style.css';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
      <ProductProvider>
      <Router>
        <App />
      </Router>
      </ProductProvider>
);
