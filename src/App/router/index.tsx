import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { MainMorePage } from '@/pages/main/ui/MainMorePage';
import {EventPage} from '@/pages/event'
import {NewsPage} from "../../pages/NewsPage/ui/NewsPage.tsx";
import {NewsDetailsPage} from "../../pages/NewsPage/ui/NewsDetailsPage.tsx";
import {Purchase} from "../../pages/purchase/ui/purchase.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/about-city',
        element: <MainMorePage />,
    },
    {
        path: 'event/:id', // event/1, event/2 и т.д.
        element: <EventPage />,
    },
    {
        path: 'news-page', // event/1, event/2 и т.д.
        element: <NewsPage/>,
    },
    {
        path: 'news-page/:id', // event/1, event/2 и т.д.
        element: <NewsDetailsPage/>,
    },
    {
        path: 'purchase/:id',
        element: <Purchase/>,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};