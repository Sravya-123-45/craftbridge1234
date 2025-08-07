import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import Navbar from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import About from './Components/About/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                path: "navbar",
                element: <Navbar />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);