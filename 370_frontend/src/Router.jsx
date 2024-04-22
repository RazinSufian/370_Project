import React from 'react';
// import {
//     RouterProvider,
//     createBrowserRouter,
//   } from "react-router-dom";
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import ShoeDetail from './Pages/ProductDetail/ProductDetail';
import ShopPage from './Pages/ShopPage/ShopPage';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App></App>,

        },
        {
          path: "/products/:id",
          element: <ProductDetail></ProductDetail>
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