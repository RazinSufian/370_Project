import React, { useState, useEffect } from 'react';
import { useGetShopBySellerIdQuery, useCreateShopMutation, useUpdateShopMutation } from '../../features/shop/shopAPI';

const ShopInfo = () => {
  const seller_id = localStorage.getItem('seller_id');
  console.log(seller_id);
  const { data, isLoading, isError, error, refetch } = useGetShopBySellerIdQuery(seller_id, { skip: !seller_id });
  const shopData = data[0];
  const [isEditing, setIsEditing] = useState(false);
  const [sellerId, setSellerId] = useState(seller_id || '');
  const [name, setName] = useState('');
  const [totalCategories, setTotalCategories] = useState('');
  const [phone, setPhone] = useState('');
  const [division, setDivision] = useState('');
  const [house, setHouse] = useState('');
  const [city, setCity] = useState('');
  const [fb, setFb] = useState('');
  const [insta, setInsta] = useState('');

  const [createShop] = useCreateShopMutation();
  const [updateShop] = useUpdateShopMutation();

  useEffect(() => {
    if (shopData) {
      setSellerId(shopData.seller_id || '');
      setName(shopData.name || '');
      setTotalCategories(shopData.total_categories || '');
      setPhone(shopData.phone || '');
      setDivision(shopData.division || '');
      setHouse(shopData.house || '');
      setCity(shopData.city || '');
      setFb(shopData.fb || '');
      setInsta(shopData.insta || '');
    }
  }, [shopData]);

  const handleCreateShop = async () => {
    try {
      await createShop({ seller_id, name, total_categories: totalCategories, phone, division, house, city, fb, insta });
      refetch();
    } catch (err) {
      console.error('Failed to create shop:', err);
    }
  };

  const handleUpdateShop = async () => {
    try {
      await updateShop({ sellerId, name, totalCategories, phone, division, house, city, fb, insta });
      setIsEditing(false);
      refetch();
    } catch (err) {
      console.error('Failed to update shop:', err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const shopExists = shopData && Object.keys(shopData).length > 0;

  return (
    <div>
      {shopExists ? (
        <>
          <h2>Shop Details</h2>
          <p>Seller ID: {sellerId}</p>
          <p>Name: {name}</p>
          <p>Total Categories: {totalCategories}</p>
          <p>Phone: {phone}</p>
          <p>Division: {division}</p>
          <p>House: {house}</p>
          <p>City: {city}</p>
          <p>Facebook: {fb}</p>
          <p>Instagram: {insta}</p>
          {/* {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
          {isEditing && (
            <button onClick={handleUpdateShop}>Save</button>
          )} */}
        </>
      ) : (
        <>
          <h2>Create Shop</h2>
          <div>
            <label htmlFor="sellerId">Seller ID:</label>
            <input type="text" id="sellerId" disabled value={seller_id} onChange={(e) => setSellerId(e.target.value)} />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="totalCategories">Total Categories:</label>
            <input type="text" id="totalCategories" value={totalCategories} onChange={(e) => setTotalCategories(e.target.value)} />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label htmlFor="division">Division:</label>
            <input type="text" id="division" value={division} onChange={(e) => setDivision(e.target.value)} />
          </div>
          <div>
            <label htmlFor="house">House:</label>
            <input type="text" id="house" value={house} onChange={(e) => setHouse(e.target.value)} />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label htmlFor="fb">Facebook:</label>
            <input type="text" id="fb" value={fb} onChange={(e) => setFb(e.target.value)} />
          </div>
          <div>
            <label htmlFor="insta">Instagram:</label>
            <input type="text" id="insta" value={insta} onChange={(e) => setInsta(e.target.value)} />
          </div>
          <button onClick={handleCreateShop}>Create Shop</button>
        </>
      )}
    </div>
  );
}

export default ShopInfo;
