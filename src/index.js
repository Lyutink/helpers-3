import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  App  from 'components/App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="helpers-3/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


