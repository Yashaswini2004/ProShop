// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="product/:id" element={<ProductScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
