import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import appsetting from '../../appsetting.json';
const { SERVER_API } = appsetting;
function ArtistProfile() {
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
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./index.html">
                                    <i className="fa fa-home" /> Home
                                </a>
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Shop Section Begin */}
            <section className="shop spad">
                <div className="container" style={{ padding: '30px 15px' }}>
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="shop__sidebar">
                                <div className="sidebar__categories">
                                    <div className="section-title">
                                        <h4>Profile</h4>
                                    </div>
                                    <div className="categories__accordion">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="display-button-cate">
                                                    <a className="w3-bar-item w3-button" href="/ArtistProfile">
                                                        Profile Information
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div>
                                                    <a
                                                        className="w3-bar-item w3-button"
                                                        href="./ArtistProfile/MyArtwork"
                                                    >
                                                        Copyrighted Artwork
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div>
                                                    <a className="w3-bar-item w3-button">Owner Artwork</a>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div>
                                                    <a className="w3-bar-item w3-button">Order</a>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div>
                                                    <a className="w3-bar-item w3-button">Trasation</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">profile</div>
                    </div>
                </div>
            </section>
            {/* Shop Section End */}

            {/* Instagram Begin */}
            <div className="instagram">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-1.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-2.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-3.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-4.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-5.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/instagram/insta-6.jpg')`,
                                }}
                            >
                                <div className="instagram__text">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <a href="#">ArtWork</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Instagram End */}
        </div>
    );
}

export default ArtistProfile;
