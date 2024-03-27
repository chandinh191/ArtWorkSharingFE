import React, { useEffect, useState } from 'react';
import axios from 'axios';
import appsetting from '../../appsetting.json';
const { SERVER_API } = appsetting;
function OrderCompleted() {
    const token = localStorage.getItem('token');
    const useridlocal = localStorage.getItem('userid');

    /* Lấy user id */
    const userid = useridlocal;

    const status = 2;
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
    const myOrders = orders.filter((order) => order.buyerAccountId === userid || order.ownerAccountId === userid);
    console.log(myOrders);

    return (
        <div>
            <p>History of successful trading orders with you</p>
            {myOrders.map((order, index) => (
                <div className="row">
                    <div className="product-card-horizontal">
                        <img src={order.artWork.imageUrl} alt="Product Image" className="product-image" />
                        <div className="product-details2">
                            <h2 className="product-title">{order.artWork.name}</h2>
                            <p className="product-description">Description: {order.artWork.description}</p>
                            <p className="product-description">Buyer: {order.buyerAccountId}</p>
                            <p className="product-description">Seller: {order.ownerAccountId}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OrderCompleted;
