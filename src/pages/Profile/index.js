import React, { useEffect, useState } from 'react';

import '~/assets/css/artist-profile.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import appsetting from '../../appsetting.json';
const { SERVER_API } = appsetting;

function Profile() {
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
    return (
        <div>
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                    alt=""
                                />
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Kshiti Ghelani</h5>
                                <h6>Web Developer and Designer</h6>
                                <p className="proile-rating">
                                    RANKINGS : <span>8/10</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href="">Website Link</a>
                                <br />
                                <a href="">Bootsnipp Profile</a>
                                <br />
                                <a href="">Bootply Profile</a>
                                <p>SKILLS</p>
                                <a href="">Web Designer</a>
                                <br />
                                <a href="">Web Developer</a>
                                <br />
                                <a href="">WordPress</a>
                                <br />
                                <a href="">WooCommerce</a>
                                <br />
                                <a href="">PHP, .Net</a>
                                <br />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Kshiti123</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Kshiti Ghelani</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>kshitighelani@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>123 456 7890</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Web Developer and Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input
                            type="submit"
                            className="profile-edit-btn"
                            name="btnAddMore"
                            defaultValue="Edit Profile"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
