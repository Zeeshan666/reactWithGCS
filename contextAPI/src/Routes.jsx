import React from 'react'
import Login from './components/Login'
import Welcome from './components/Welcome'
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/welcome",
        element: <Welcome />,
    },
]);

export default router