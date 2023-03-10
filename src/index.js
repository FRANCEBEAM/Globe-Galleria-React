import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import Destinations from './routes/Destinations';
import ToursActivities from './routes/ToursActivities';
import About from './routes/About';
import Contact from './routes/Contact';

import Navbar from "./components/Navbar";


const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      
    </>
  )

}


const router = createBrowserRouter([
  {
    element : <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "toursactivities",
        element: <ToursActivities />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);