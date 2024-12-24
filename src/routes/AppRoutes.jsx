import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import Rooms from '../pages/Rooms';
import RoomDetails from '../pages/RoomDetails';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import MyBookings from '../pages/MyBookings';

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/rooms/:id',
                element: <RoomDetails></RoomDetails>,
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/my-bookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default AppRoutes;