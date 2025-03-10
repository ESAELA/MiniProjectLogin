import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import Login from "./componentes/Login"
import Recovery from "./componentes/Recovery"
import Register from "./componentes/Register"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
)
