import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies/">
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
        <GlobalStyle />
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);
