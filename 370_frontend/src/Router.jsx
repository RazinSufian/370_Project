import React from 'react';
// import {
//     RouterProvider,
//     createBrowserRouter,
//   } from "react-router-dom";
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ShopPage from './Pages/ShopPage/ShopPage';
import Main from './Layout/Main/Main';
import AuthPage from './Pages/AuthPage/AuthPage';
import SellerLayout from './Layout/SellerLayout/SellerLayout';
import SellerInfo from './Seller/SellerInfo/SellerInfo';
import ShopInfo from './Seller/ShopInfo/ShopInfo';
import ProductInfo from './Seller/Products/ProductInfo/ProductInfo';
import ProductLists from './Seller/Products/ProductLists/ProductLists';
import SellerDashboard from './Seller/SellerDashboard/SellerDashboard';
import ShopManagement from './Seller/ShopManagement/ShopManagement';
import ProductListings from './Seller/ProductListings/ProductListings';
import InventoryManagement from './Seller/InventoryManagement/InventoryManagement';
import OrderList from './Seller/Orders/OrderList/OrderList';
import PaymentSettings from './Seller/PaymentSettings/PaymentSettings';
import ShippingSettings from './Seller/ShippingSettings/ShippingSettings';
import PromotionsAndDiscounts from './Seller/PromotionsAndDiscounts/PromotionsAndDiscounts';
import CommunicationCenter from './Seller/CommunicationCenter/CommunicationCenter';
import AnalyticsAndReports from './Seller/AnalyticsAndReports/AnalyticsAndReports';
import AccountSettings from './Seller/AccountSettings/AccountSettings';
import TermsAndPolicies from './Seller/TermsAndPolicies/TermsAndPolicies';
import SupportAndHelpCenter from './Seller/SupportAndHelpCenter/SupportAndHelpCenter';
import NotificationCenter from './Seller/NotificationCenter/NotificationCenter';
import FeedbackAndRatings from './Seller/FeedbackAndRatings/FeedbackAndRatings';
import OrderDetails from './Seller/Orders/OrderDetails/OrderDetails';
import BlogPage from './Pages/BlogPage/BlogPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import NotificationsPage from './Pages/NotificationsPage/NotificationsPage';
import OrderConfirmationPage from './Pages/OrderConfirmationPage/OrderConfirmationPage';
import PrivacyPolicyAndTermsPage from './Pages/PrivacyPolicyAndTermsPage/PrivacyPolicyAndTermsPage';
import SellerReviewsPage from './Pages/SellerReviewsPage/SellerReviewsPage';
import ShoppingCartPage from './Pages/ShoppingCartPage/ShoppingCartPage';
import UserAccountPage from './Pages/UserAccountPage/UserAccountPage';
import WishlistPage from './Pages/WishlistPage/WishlistPage';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import AdminLogin from './Authentication/Admin/AdminLogin/AdminLogin';
import AdminSignup from './Authentication/Admin/AdminSignUp/AdminSignUp';
import SellerLogin from './Authentication/Seller/SellerLogin/SellerLogin';
import SellerSignup from './Authentication/Seller/SellerSignUp/SellerSignUp';
import CustomerLogin from './Authentication/Cusromer/CusromerLogin/CusromerLogin';
import CustomerSignup from './Authentication/Cusromer/CusromerSignUp/CusromerSignUp';
import ProductsPage from './Pages/AllProduct/AllProdoct';

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <App></App>,
  
          },
          {
            path: "/all-products",
            element: <ProductsPage></ProductsPage>
          },
          {
            path: "/products/:id",
            element: <ProductDetail></ProductDetail>
          },
          // {
          //   path: "/shop/:shopname",
          //   element: <ShopPage></ShopPage>
          // },
          {
            path: "/shops/:id",
            element: <ShopPage></ShopPage>
          },
          {
            path: '/product-listings',
            element: <ProductListings />,
          },
          {
            path: '/shopping-cart',
            element: <ShoppingCartPage />,
          },
          {
            path: '/checkout',
            element: <CheckoutPage />,
          },
          {
            path: '/order-confirmation',
            element: <OrderConfirmationPage />,
          },
          {
            path: '/user-account',
            element: <UserAccountPage />,
          },
          {
            path: '/wishlist',
            element: <WishlistPage />,
          },
          {
            path: '/seller-reviews',
            element: <SellerReviewsPage />,
          },
          {
            path: '/blog',
            element: <BlogPage />,
          },
          {
            path: '/privacy-policy-terms',
            element: <PrivacyPolicyAndTermsPage />,
          },
          {
            path: '/notifications',
            element: <NotificationsPage />,
          },
        ],
      },
      {
        path: "/seller",
        element: <SellerLayout></SellerLayout>,
        children: [
          {
            path: "profile",
            element: <SellerInfo></SellerInfo>
          },
          {
            path: "shop",
            element: <ShopInfo></ShopInfo>
          },
          {
            path: "add-product",
            element: <ProductInfo></ProductInfo>
          },
          {
            path: "products",
            element: <ProductLists></ProductLists>
          },
          {
            path: "/seller/dashboard",
            element: <SellerDashboard />
          },
          {
            path: "/seller/shop-management",
            element: <ShopManagement />
          },
          {
            path: "/seller/product-listings",
            element: <ProductListings />
          },
          {
            path: "/seller/inventory-management",
            element: <InventoryManagement />
          },
          {
            path: "/seller/order-management",
            element: <OrderList />
          },
          {
            path: "/seller/order-details/:id",
            element: <OrderDetails />
          },
          {
            path: "/seller/payment-settings",
            element: <PaymentSettings />
          },
          {
            path: "/seller/shipping-settings",
            element: <ShippingSettings />
          },
          {
            path: "/seller/promotions-and-discounts",
            element: <PromotionsAndDiscounts />
          },
          {
            path: "/seller/communication-center",
            element: <CommunicationCenter />
          },
          {
            path: "/seller/analytics-and-reports",
            element: <AnalyticsAndReports />
          },
          {
            path: "/seller/account-settings",
            element: <AccountSettings />
          },
          {
            path: "/seller/terms-and-policies",
            element: <TermsAndPolicies />
          },
          {
            path: "/seller/support-and-help-center",
            element: <SupportAndHelpCenter />
          },
          {
            path: "/seller/notification-center",
            element: <NotificationCenter />
          },
          {
            path: "/seller/feedback-and-ratings",
            element: <FeedbackAndRatings />
          },
        ]
      },
      {
        path: "/auth",
        element: <Main> </Main>,
        children: [
          {
            path: "/auth/admin",
            element: <AdminLogin></AdminLogin>,
          },
          {
            path: "/auth/admin/signup",
            element: <AdminSignup></AdminSignup>,
          },
          {
            path: "/auth/seller/login",
            element: <SellerLogin></SellerLogin>,
          },
          {
            path: "/auth/seller/signup",
            element: <SellerSignup></SellerSignup>
          },
          {
            path: "/auth/customer/login",
            element: <CustomerLogin></CustomerLogin>
          },
          {
            path: "/auth/customer/signup",
            element: <CustomerSignup></CustomerSignup>
          }

        ]

      },
      ,
        
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