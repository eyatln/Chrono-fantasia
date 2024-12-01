import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';  // Importer BrowserRouter
import MainApp from './Mainapp';  // Importer MainApp

// Envelopper l'application dans BrowserRouter ici
ReactDOM.render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>,
  document.getElementById('root')
);
