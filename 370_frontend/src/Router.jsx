import React from 'react';
// import {
//     RouterProvider,
//     createBrowserRouter,
//   } from "react-router-dom";
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ShoeDetail from './Pages/ShoeDetail/ShoeDetail';
import ShopPage from './Pages/ShopPage/ShopPage';

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App></App>,

        },
        {
          path: "/shoes/:id",
          element: <ShoeDetail></ShoeDetail>,
        },
        {
          path: "/shops/:id",
          element: <ShopPage></ShopPage>
        },
        {
          path: "*",
          element: <h1>Not Found</h1>,
        }
      ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Router;