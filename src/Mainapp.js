import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Importer Routes et Route
import App from './App';  // Votre composant principal
import PaymentPage from './PaymentPage';  // La page de paiement

function MainApp() {
  return (
    <Routes>
      {/* Définition des routes de votre application */}
      <Route path="/" element={<App />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default MainApp;
