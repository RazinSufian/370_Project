// ProductsPage.js

import React from 'react';
import { useGetAllProductsQuery } from '../../features/products/productAPI';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './AllProduct.css'; // Import the CSS file

const ProductsPage = () => {
    const { data: products, error, isLoading } = useGetAllProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

    return (
        <div className="products-page">
            <h1 className="centered-text">All Products</h1> 
            <div className="products-container">
                {products?.map(product => (
                    <ProductCard 
                        key={product.product_id} 
                        product={{
                            product_id: product.product_id,
                            product_name: product.name,
                            product_image_url: product.image_url,
                            product_description: product.description,
                            shop_name: product.shop_name,
                            price: product.price
                        }} 
                        className="product-card"
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
