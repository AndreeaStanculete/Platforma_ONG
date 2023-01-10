import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Pages/login';
import Register from './Pages/register';
import Error from './Pages/error';
import Donate from './Pages/donate';
import Donate2 from './Pages/donate2';
import Donate3 from './Pages/donate3';
import Settings2 from './Pages/settings'
import Account from "./Pages/account";
import MyNGOs from "./Pages/myNGOs";
import Map from './Utilities/Map';
import Revendica from './Utilities/Revendica';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/error" element={<Error />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/donate2" element={<Donate2 />} />
      <Route path="/donate3" element={<Donate3 />} />
      <Route path="/settings" element={<Settings2 />} />
      <Route path="/myNGOs" element={<MyNGOs />} />
      <Route path="/account" element={<Account />} />
      <Route path="/Revendica" element={<Revendica />} />
      <Route path="/Map" element={<Map />} />
      <Route path='*' to='/error' element={<Error />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
