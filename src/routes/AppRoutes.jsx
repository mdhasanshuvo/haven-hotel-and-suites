import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <div className='text-3xl'>Hello world!</div>,
    },
]);

export default AppRoutes;