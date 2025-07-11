import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import "./index.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
