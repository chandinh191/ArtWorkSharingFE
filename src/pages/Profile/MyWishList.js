import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import appsetting from '../../appsetting.json';
const { SERVER_API } = appsetting;
function MyWishlist() {
    const token = localStorage.getItem('token');
    const useridlocal = localStorage.getItem('userid');

    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        // Make the API request
        axios
            .get(`${SERVER_API}/WishList/GetByUserId?userId=${useridlocal}`)
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
        </div>
    );
}

export default MyWishlist;
