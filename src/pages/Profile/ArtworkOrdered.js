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

    const userArtworks = myArtworks.filter((artwork) => {
        if (artwork.orders && Array.isArray(artwork.orders)) {
            // Nếu có các đơn hàng cho tác phẩm
            return artwork.orders.some((order) => order.status === 1);
        } else if (artwork.orders && typeof artwork.orders === 'object') {
            // Nếu chỉ có một đơn hàng cho tác phẩm
            return artwork.orders.status === 1;
        }
        return false; // Nếu không có đơn hàng nào cho tác phẩm
    });

    return (
        <div>
            {userArtworks.map((artwork, index) => (
                <div className="row">
                    <div className="product-card-horizontal">
                        <img src={artwork.imageUrl} alt="Product Image" className="product-image" />
                        <div className="product-details2">
                            <h2 className="product-title">{artwork.name}</h2>
                            <p className="product-description">{artwork.description}</p>
                            <div className="product-price">${artwork.price}</div>
                            <button className="add-to-cart-btn">Confirm sell</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ArtworkOrdered;
