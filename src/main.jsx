/*
En el App.jsx: Como el BrowserRouter ya está envuelto desde el archivo principal main.jsx, 
cuando escribes el App.jsx ya no tengo que repetirlo, y puedo poner las <Routes> 
*/ 

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; //para envolver todo en  BrowserRouter
import App from './App.jsx';
import './index.css' //

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);