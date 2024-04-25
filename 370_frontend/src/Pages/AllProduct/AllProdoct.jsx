import React from 'react';
import { useGetAllProductsQuery } from '../../features/products/productAPI';
import ProductCard from '../../Components/ProductCard/ProductCard';
// import { useGetAllProductsQuery } from '../services/productAPI';
// import ProductCard from './ProductCard'; // Import the ProductCard component

const ProductsPage = () => {
    const { data: products, error, isLoading } = useGetAllProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

    return (
        <div>
            <h1>All Products</h1>
            <div className="products-container"> {/* Ensure you have styles for this or adapt as needed */}
                {products?.map(product => (
                    <ProductCard key={product.product_id} product={{
                        product_id: product.product_id,
                        product_name: product.name, // Adapted field name
                        product_image_url: product.image_url, // Adapted field name, assuming it exists
                        product_description: product.description, // Adapted field name, assuming it exists
                        shop_name: product.shop_name,
                        price: product.price
                    }} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
