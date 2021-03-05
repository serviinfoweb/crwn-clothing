import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Library to use navigation inside the site 
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


