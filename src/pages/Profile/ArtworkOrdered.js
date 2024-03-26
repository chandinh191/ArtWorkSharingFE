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
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
    }, []);
    /* Lấy user tạm ********************** */
    const userid = useridlocal;
    const myArtworks = artworks.filter((artwork) => artwork.userOwnerId === userid);
    //console.log(myArtworks);

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

    const myOrders = orders.filter((order) => myArtworks.some((artwork) => artwork.id === order.artWorkID));
    console.log(myOrders);

    async function UpdateStatusOrder(orderId) {
        console.log(orderId);
        const res = await fetch(`${SERVER_API}/Order/Update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                id: orderId,
                status: 2,
            }),
        });
        if (res.ok) {
            window.location.reload();
            const json = await res.json();
            console.log(json);
        } else {
            window.location.reload();
        }
    }
    async function UpdateStatusOrderCancel(orderId) {
        console.log(orderId);
        const res = await fetch(`${SERVER_API}/Order/Update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                id: orderId,
                status: 0,
            }),
        });
        if (res.ok) {
            window.location.reload();
            const json = await res.json();
            console.log(json);
        } else {
            window.location.reload();
        }
    }

    return (
        <div>
            {myOrders.map((order, index) => (
                <div className="row">
                    <div className="product-card-horizontal">
                        <img src={order.artWork.imageUrl} alt="Product Image" className="product-image" />
                        <div className="product-details2">
                            <h2 className="product-title">{order.artWork.name}</h2>
                            <p className="product-description">Description: {order.artWork.description}</p>
                            <button
                                className="add-to-cart-btn"
                                style={{ backgroundColor: 'red' }}
                                onClick={() => UpdateStatusOrderCancel(order.id)}
                            >
                                Cancel Order Request
                            </button>
                            <button className="add-to-cart-btn" onClick={() => UpdateStatusOrder(order.id)}>
                                Accept Order Request
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ArtworkOrdered;
