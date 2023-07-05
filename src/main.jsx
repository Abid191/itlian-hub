import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  // eslint-disable-next-line no-unused-vars
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/router.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider><RouterProvider router={router}/></AuthProvider>
)
