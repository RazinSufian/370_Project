// server.js
import express from 'express';
import cors from 'cors';
import homePageRoute from './app/router/homepage.js';
import productRoute from './app/router/ProductInfoRoutes.js'

//Ensure the path to your database.js is correct


const app = express();
const port = 3000;

// Apply middleware
app.use(cors()); // Enables CORS
app.use(express.json()); // Parses incoming JSON requests
app.use('/', homePageRoute);
app.use('/products', productRoute)



// Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
