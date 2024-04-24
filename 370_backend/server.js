// server.js
import express from 'express';
import cors from 'cors';
import homePageRoute from './app/router/homepage.js';
import productRoute from './app/router/ProductInfoRoutes.js'
import authRoute from './app/router/AuthRouters.js'
import customerRouter from './app/router/CustomerRoutes.js'
import sellerRoute from './app/router/SellerRoutes.js'
import adminRoute from './app/router/AdminRoutes.js'
import dotenv from 'dotenv';
//Ensure the path to your database.js is correct


const app = express();
dotenv.config();
const port = 3000;

// Apply middleware
app.use(cors()); // Enables CORS
app.use(express.json()); // Parses incoming JSON requests
app.use('/', homePageRoute);
app.use('/products', productRoute)
app.use('/auth', authRoute)
app.use('/customer', customerRouter)
app.use('/seller', sellerRoute)
app.use('/admin', adminRoute)



// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
