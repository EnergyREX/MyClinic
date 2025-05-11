import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Register from './template/Register.tsx';
import Login from './template/Login.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './template/NotFound.tsx';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/register", element: <Register />},
  {path: "/login", element: <Login />},
  {path: "*", element: <NotFound />}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
