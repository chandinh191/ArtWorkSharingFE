import React, { useEffect, useState } from 'react';
import axios from 'axios';
import appsetting from '../../appsetting.json';
const { SERVER_API } = appsetting;
function ArtworkOrdered() {
    const token = localStorage.getItem('token');
    const useridlocal = localStorage.getItem('userid');
    const [artworks, setArtworks] = useState([]);
    useEffect(() => {
        // Make the API request
        axios
            .get(`${SERVER_API}/ArtWork/GetAll`)
            .then((response) => {
                // Update the state with the fetched data
                setArtworks(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
    }, []);
    /* Lấy user tạm ********************** */
    const userid = useridlocal;
    const myArtworks = artworks.filter((artwork) => artwork.userOwnerId === userid);

    const status = 1;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch(`${SERVER_API}/Order/GetOrderByStatus?status=${status}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (res.ok) {
                    const resData = await res.json(); // Extract JSON data from response
                    setOrders(resData);
                } else {
                    console.error('Failed to fetch artwork');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchOrders();
    }, [status]);

    console.log(orders);

    return (
        <div>
            {myArtworks.map((artwork, index) => (
                <div className="row">
                    <div className="product-card-horizontal">
                        <img src={artwork.imageUrl} alt="Product Image" className="product-image" />
                        <div className="product-details2">
                            <h2 className="product-title">{artwork.name}</h2>
                            <p className="product-description">Category: {artwork.category.categoryName}</p>

                            <div className="product-price">Price: ${artwork.price}</div>
                            <button className="add-to-cart-btn">Accept Order Request</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ArtworkOrdered;
