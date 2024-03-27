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

    async function UpdateArtworkStatus(artWorkId, status) {
        const res = await fetch(`${SERVER_API}/ArtWork/UpdateStatus`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                artWorkId: artWorkId,
                status: status,
            }),
        });
        if (res.ok) {
            window.location.reload();
        } else {
            window.location.reload();
        }
    }

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
            <p>Products you currently own</p>
            {userArtworks.map((artwork, index) => (
                <div className="row">
                    <div className="product-card-horizontal">
                        <img src={artwork.imageUrl} alt="Product Image" className="product-image" />
                        <div className="product-details2">
                            <h2 className="product-title">{artwork.name}</h2>
                            <p className="product-description">Category: {artwork.category.categoryName}</p>
                            <p className="product-description">
                                Selling:
                                {artwork.artWorkStatus === 1 ? ( // If the artwork is sold
                                    <i className="icon_check_alt green"></i> // Render a red cross icon
                                ) : (
                                    // If the artwork is not sold
                                    <i className="icon_close_alt red"></i> // Render a green checkmark icon
                                )}
                            </p>
                            <div className="product-price">Price: ${artwork.price}</div>
                            <button className="add-to-cart-btn">Edit</button>
                            <button className="add-to-cart-btn">Detail</button>
                            {artwork.artWorkStatus === 1 ? ( // If the artwork is sold
                                <button className="add-to-cart-btn" onClick={() => UpdateArtworkStatus(artwork.id, 2)}>
                                    Stop selling
                                </button>
                            ) : (
                                // If the artwork is not sold
                                <button className="add-to-cart-btn" onClick={() => UpdateArtworkStatus(artwork.id, 1)}>
                                    Start selling
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyArtwork;
