import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './util/ProtectedRoute';
import Signin from './auth/signin/Signin';
import Signup from './auth/signup/Signup';
import Home from './portal/home/Home';
import Auth from './auth/Auth';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
      <Routes>
          <Route path='/auth' element={<Auth />}> </Route>
          <Route path='/signin' element={<Signin />} ></Route>
          <Route path='/signup' element={<Signup />} ></Route>
          <Route path="/" element={<App />}>
              <Route path='' element={
                  <ProtectedRoute>
                      <Home />
                  </ProtectedRoute>
              } />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
