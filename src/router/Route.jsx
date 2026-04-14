import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from '../Layout/Layout';
import HomePage from '../pages/HomePages/HomePage';
import FriendDetails from '../pages/FriendDetails/FriendDetails';
import ErrorPages from '../pages/ErrorPages/ErrorPages';
import Timelinepages from '../pages/TimelinePages/Timelinepages';
import States from '../pages/States/States';

const Route = () => {
    const router = createBrowserRouter([
        {
            path: "", Component: Layout,
            children: [
                { index: true, Component: HomePage },
                { path: "TImeline", Component: Timelinepages },
                { path: "States", Component: States },
            ],
            errorElement: <ErrorPages />,
        },
    ])
    return (
        <RouterProvider router={router} />
    );
};

export default Route;