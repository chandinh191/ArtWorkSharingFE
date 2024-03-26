import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import appsetting from '../../appsetting.json';
const { SERVER_API } = appsetting;
function MyArtwork() {
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
    /* Lấy user  */
    const userid = useridlocal;
    console.log(userid);
    const userArtworks = artworks.filter((artwork) => artwork.userOwnerId === userid);
    console.log(userArtworks);
    return (
        <div>
            <button
                type="submit"
                class="site-btn"
                style={{ backgroundColor: 'green' }}
                onClick={() => {
                    window.location.href = './Create';
                }}
            >
                Create new
            </button>

            {userArtworks.map((artwork, index) => (
                <div className="row">
                    <div className="product-card-horizontal">
                        <img src={artwork.imageUrl} alt="Product Image" className="product-image" />
                        <div className="product-details2">
                            <h2 className="product-title">{artwork.name}</h2>
                            <p className="product-description">{artwork.description}</p>
                            <div className="product-price">${artwork.price}</div>
                            <button className="add-to-cart-btn">Action</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyArtwork;
