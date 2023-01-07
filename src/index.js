import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './Redux'
import "./i18n";
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';
import Order from './Pages/Order';
import Address from './Pages/Address';
import AddAddress from './Pages/AddAddress';
import Checkout from './Pages/Checkout';
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/product/:id', element: <Product /> },
      { path: '/cart', element: <Cart /> },
      { path: '/orders', element: <Orders /> },
      { path: '/orders/:id', element: <Order /> },
      { path: '/addresses', element: <Address /> },
      { path: '/addAddress', element: <AddAddress /> },
      { path: '/checkout', element: <Checkout /> },
    ],
    // errorElement: <NotFound />,

  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,

);


