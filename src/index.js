import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './Redux'
import "./i18n";
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
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


