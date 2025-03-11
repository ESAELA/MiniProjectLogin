import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import Login from "./componentes/Login"
import Recovery from "./componentes/Recovery"
import Register from "./componentes/Register"
import ForgotPassword from "./componentes/ForgotPassword.jsx";
import ForgotUsername from "./componentes/forgotUsername.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/forgotusername" element={<ForgotUsername />} />
    </Routes>
  </BrowserRouter>
)
