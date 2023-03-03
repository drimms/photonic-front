import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './component/About'
import Contact from './component/Contanct';
import Labs from './component/Labs';
import TitleLabs from './Navigate/TitleLabs';
import Admin from './component/adminpanel/Admin';
import AdminDisc from './component/adminpanel/AdminDisc';
import AdminLab  from './component/adminpanel/AdminLab';
import { AuthUser } from './Auth/AuthUser';
import { Auth } from './Auth/Auth';
import { Login } from './utils/Login';
import Labraby from './component/Labraby'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/labs",
    element: <Labs />,
  },
  {
    path: "labs/:course/:id",
    element: <TitleLabs/>,

  },
  {
    path: "labs/:course/:id/:lab",
    element: <Labraby/>,

  },
  {
    path: "/about",
    element: 
    <About/>,
  },

  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/admin",
    element: <Auth><Admin/></Auth>,
  },
  {
    path: "/admin/:course/:index", 
    element: <AdminDisc/>,
  },
  {
    path: "/admin/:course/:lab/:index", 
    element: <AdminLab/>,
  },
  {
    path: "/login",
    element: <Login/>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthUser>
    <RouterProvider router={router} />
    </AuthUser>
  </React.StrictMode>
);

