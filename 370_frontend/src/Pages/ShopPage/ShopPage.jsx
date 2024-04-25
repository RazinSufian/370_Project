import React from 'react';
import { useParams } from 'react-router-dom';
// import { useGetProductByShopIdQuery } from '../services/productAPI';
// import ProductCard from './ProductCard'; // Assuming ProductCard is the card component you want to use
import { useGetProductByShopIdQuery, useGetProductByShopNameQuery } from '../../features/products/productAPI';
import ProductCard from '../../Components/ProductCard/ProductCard';

const ShopPage = () => {
    const { id } = useParams(); // This captures the shop ID from the URL
    const { data: products, error, isLoading } = useGetProductByShopIdQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;
    if (!products || products.length === 0) return <div>No products found for this shop.</div>;

    return (
        <div>
            <h1>Products of Shop ID: {id}</h1>
            <div className="products-container">
                {products.map((product) => (
                    <ProductCard key={product.product_id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
