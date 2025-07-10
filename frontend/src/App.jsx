// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'; // example extra page
import './index.css';
import Footer from "./component/Footer";
import "../src/assets/styles/index.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
       
          <Route path="/" element={<HomeScreen />} />
          <Route path="product/:id" element={<ProductScreen />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
export default App;