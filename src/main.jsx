import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: '/addcoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updatecoffee',
    element: <UpdateCoffee></UpdateCoffee>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
