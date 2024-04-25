import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../features/products/productAPI';
import { useCreateOrderMutation } from '../../features/order/orderAPI';
// import { useCreateOrderMutation } from '../../features/orders/orderAPI';

const ProductDetail = () => {
  const { id } = useParams();
  const customer_id = localStorage.getItem('customer_id');
  const { data, error, isLoading } = useGetProductByIdQuery(id);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const [createOrder, { isLoading: isCreatingOrder }] = useCreateOrderMutation();

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    paymentMethod: '',
    billingAddress: '',
    deliveryTime: '',
  });

  useEffect(() => {
    if (data) {
      setProduct(data[0]);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const handleShopPage = () => {
    navigate(`/shops/${product.shop_id}`);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ paymentMethod: '', billingAddress: '', deliveryTime: '' });
  };

  const handleSubmitForm = async () => {
    try {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn) {
      const orderData = {
        customer_id: customer_id,
        product_id: product.product_id,
        shop_id: product.shop_id,
        payment_method: formData.paymentMethod,
        billing_address: formData.billingAddress,
        delivery_time: formData.deliveryTime,
        payment_status: 'pending',
        shipment_status: 'pending',
      
      };

      await createOrder(orderData).unwrap();
      handleCloseModal();
      // Handle successful order creation (e.g., show a success message, redirect to a checkout page)
      console.log('Order created successfully!');
    }
    else {
      navigate('/auth/customer/login');
    }
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="product-detail">
      {product && (
        <>
          <h1>{product.name}</h1>
          <img src={product.image_url} alt={product.name} style={{ maxWidth: '100%' }} />
          <p>{product.description}</p>
          <p onClick={handleShopPage}>Shop: {product.shop_name}</p>
          <p>Quantity Available: {product.quantity}</p>
          <p>Price: ${product.price ? product.price : 'N/A'}</p>
          <p>Status: {product.approval ? 'Approved' : 'Pending'}</p>
          <p>Reviews: {product.review}</p>
          <button onClick={handleOpenModal}>Buy</button>
        </>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Enter Order Details</h2>
            <form>
              <label>
                Payment Method:
                <input
                  type="text"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleFormChange}
                />
              </label>
              <label>
                Billing Address:
                <input
                  type="text"
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleFormChange}
                />
              </label>
              <label>
                Delivery Time:
                <input
                  type="text"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleFormChange}
                />
              </label>
              <button type="button" onClick={handleSubmitForm}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;