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
                { index: true, loader: () => fetch('/Data/Data.json'), Component: HomePage },
                { path: "TImeline", Component: Timelinepages },
                { path: "FriendDetails/:PersonID", loader: () => fetch('/Data/Data.json'), Component: FriendDetails },
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