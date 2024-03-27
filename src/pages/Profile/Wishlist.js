import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import appsetting from '../../appsetting.json';
const { SERVER_API } = appsetting;
function Wishlist() {
    const token = localStorage.getItem('token');
    const useridlocal = localStorage.getItem('userid');
    const [wishlists, setWishList] = useState([]);

    useEffect(() => {
        // Make the API request
        axios
            .get(`${SERVER_API}/WishList/GetAll`)
            .then((response) => {
                // Update the state with the fetched data
                setWishList(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
    }, []);

    /* Lấy user  */
    const userid = useridlocal;
    const userWishList = wishlists.filter(
        (Wishlist) => Wishlist.userAccountId === userid && Wishlist.isDeleted === false,
    );

    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        const fetchArtworks = async () => {
            const artworksPromises = userWishList.map((wishlist) =>
                fetch(`${SERVER_API}/ArtWork/GetById?id=${wishlist.artWorkID}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }).then((res) => res.json()),
            );
            Promise.all(artworksPromises)
                .then(setArtworks)
                .catch((error) => console.error('Error fetching artworks:', error));
        };
        if (userWishList.length > 0) {
            fetchArtworks();
        }
    }, [userWishList]);

    return (
        <div>
            {artworks.map((artwork, index) => (
                <div className="row" key={index}>
                    <div className="product-card-horizontal">
                        <img src={artwork.imageUrl} alt="Product Image" className="product-image" />
                        <div className="product-details2">
                            <h1 className="product-title">{artwork.name}</h1>
                            <h5 className="product-title">{artwork.description}</h5>
                            <div className="product-price">Price: ${artwork.price}</div>
                            <div style={{ textAlign: 'right' }}>
                                <Link
                                    to={`/ProductDetail?id=${artwork.id}`}
                                    className="image-popup"
                                    style={{
                                        fontSize: '3em',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                    }}
                                >
                                    <h5>Go to artwork</h5>
                                    <span className="arrow_carrot-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Wishlist;
