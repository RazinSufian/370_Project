// ProductDetail.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useDispatch } from 'react-redux';
import { useGetProductbyIdQuery } from '../../features/products/productsApiSlice';
import { selectProduct, setProduct } from '../../features/products/productsSlice';

const ProductDetail = ({ shoe }) => {
    const mockShoe = {
        id: 1,
        name: 'Sample Shoe',
        brand: 'Sample Brand',
        description: 'This is a sample shoe description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 59.99,
        image: 'sample-image.jpg',
        color: 'Red',
        sizesAvailable: ['US 7', 'US 8', 'US 9', 'US 10'],
        shop: {
          id: 1,
          name: 'Sample Shop',
          // Add other shop details as needed
        },
      };
  const { id, name, brand, description, price, image, color, sizesAvailable, shop } = mockShoe;
  const dispatch = useDispatch();
  const params = useParams();

  const { id: productId } = params;
  const { data: product, isLoading, isError } = useGetProductbyIdQuery(productId);
  // const theproduct = useSelector(selectProduct);

  // useEffect(() => {
  //   if (product) {
  //     dispatch(setProduct(product));
  //     console.log(product);
  //   }
  //   console.log(product);
  // }, [product, dispatch]);

  // useEffect(() => {
  //   if (isLoading) {
  //     dispatch(setLoading('loading'));
  //   } else if (isError) {
  //     dispatch(setError('error'));
  //   } else {
  //     dispatch(setLoading('idle'));
  //   }
  // }, [isLoading, isError, dispatch]);
  console.log(product);


  return (
    <>
      {
        product && (
          <div className="shoe-detail">
          <img src={product[0].image_url} alt={name} className="shoe-detail-image" />
      <div className="shoe-details">
        <h2>{product[0].name}</h2>
        <p><strong>Description:</strong> {product[0].product_description}</p>
        <p><strong>Price:</strong> ${product[0].price}</p>
        <p><strong>Available:</strong> {product[0].quantity} in stock</p>
        <p>
          <strong>Shop:</strong> <Link to={`/shops/${product[0].id}`} className="shop-link">{product[0].shop_name}</Link>
        </p>
        </div>
    </div>
        )
      }
      </>
      
  );
};

// Sample data for preview


export default ProductDetail;
