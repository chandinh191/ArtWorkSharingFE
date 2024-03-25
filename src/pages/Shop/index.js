import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import appsetting from '../../appsetting.json';
const { SERVER_API } = appsetting;
function Shop() {
    const [artworks, setArtworks] = useState([]);
    const [categories, setCategories] = useState([]);
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
    useEffect(() => {
        // Make the API request
        axios
            .get(`${SERVER_API}/Category/GetAll`)
            .then((response) => {
                // Update the state with the fetched data
                setCategories(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
    }, []);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(6);
    const changePageNo = (number) => setCurrentPage(number);
    const lastIndex = currentPage * dataPerPage;
    const firstIndex = lastIndex - dataPerPage;
    const currentData = artworks?.slice(firstIndex, lastIndex);

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
                <div className="container" style={{ padding: '50px 15px' }}>
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="shop__sidebar">
                                <div className="sidebar__categories">
                                    <div className="section-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <div className="categories__accordion">
                                        <div className="accordion" id="accordionExample">
                                            {categories.map((category, index) => (
                                                <div className="card">
                                                    <div className="display-button-cate">
                                                        <a className="w3-bar-item w3-button">{category.categoryName}</a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                {currentData.map((artwork, index) => (
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product__item">
                                            <div
                                                className="product__item__pic set-bg"
                                                style={{ backgroundImage: `url(${artwork.imageUrl})` }}
                                            >
                                                <ul className="product__hover">
                                                    <li>
                                                        {/* Use Link component here */}
                                                        <Link
                                                            to={`/ProductDetail?id=${artwork.id}`}
                                                            className="image-popup"
                                                        >
                                                            <span className="arrow_expand" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="icon_heart_alt" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="icon_bag_alt" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6>
                                                    <a href="#">{artwork.name}</a>
                                                </h6>

                                                <div className="product__price">${artwork.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                <button
                                    style={{
                                        backgroundColor: currentPage === 1 ? 'gray' : 'blue',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        padding: '10px',
                                        margin: '5px',
                                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                    }}
                                    disabled={currentPage === 1}
                                    onClick={() => changePageNo(currentPage - 1)}
                                >
                                    Previous
                                </button>
                                {Array.from({ length: Math.ceil(artworks?.length / dataPerPage) }, (_, i) => i + 1).map(
                                    (number) => {
                                        if (number >= currentPage - 1 && number <= currentPage + 1) {
                                            return (
                                                <button
                                                    key={number}
                                                    style={{
                                                        backgroundColor: number === currentPage ? 'blue' : 'white',
                                                        color: number === currentPage ? 'white' : 'black',
                                                        border: 'none',
                                                        borderRadius: '5px',
                                                        padding: '10px',
                                                        margin: '5px',
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() => changePageNo(number)}
                                                >
                                                    {number}
                                                </button>
                                            );
                                        }
                                    },
                                )}
                                <button
                                    style={{
                                        backgroundColor:
                                            currentPage === Math.ceil(artworks?.length / dataPerPage) ? 'gray' : 'blue',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        padding: '10px',
                                        margin: '5px',
                                        cursor:
                                            currentPage === Math.ceil(artworks?.length / dataPerPage)
                                                ? 'not-allowed'
                                                : 'pointer',
                                    }}
                                    disabled={currentPage === Math.ceil(artworks?.length / dataPerPage)}
                                    onClick={() => changePageNo(currentPage + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
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

export default Shop;
