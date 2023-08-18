import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ProductProvider from './ProductContext.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>
);
