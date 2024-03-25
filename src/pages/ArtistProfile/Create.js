import React, { useEffect, useState } from 'react';
import '~/assets/css/templatemo-style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import appsetting from '../../appsetting.json';
const { SERVER_API } = appsetting;

function CreateArtWork() {
    const [category, setCategories] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    };
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        categoryId: '',
        expireDate: '',
        stock: '',
    });
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataWithFile = new FormData();
        formDataWithFile.append('name', formData.name);
        formDataWithFile.append('description', formData.description);
        formDataWithFile.append('category', formData.categoryId);
        formDataWithFile.append('price', formData.price);
        formDataWithFile.append('image', selectedFile);

        axios
            .post('https://localhost:7178/api/Category/Add', formDataWithFile)
            .then((response) => {
                console.log('Response:', response.data);
                // Do something with the response if needed
            })
            .catch((error) => {
                console.error('Error posting data:', error);
            });
    };
    useEffect(() => {
        // Make the API request
        axios
            .get(`https://localhost:7178/api/Category/GetAll`)
            .then((response) => {
                // Update the state with the fetched data
                setCategories(response.data);
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
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
                        <div className="col-lg-9 col-md-9">
                            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="tm-block-title d-inline-block">Add Product</h2>
                                    </div>
                                </div>
                                <div className="row tm-edit-product-row">
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <form onSubmit={handleSubmit} className="tm-edit-product-form">
                                            <div className="form-group mb-3">
                                                <label htmlFor="name">Art Work Name</label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    className="form-control validate"
                                                    required=""
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="description">Description</label>
                                                <textarea
                                                    className="form-control validate"
                                                    rows={3}
                                                    required=""
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="category">Category</label>
                                                <select className="custom-select tm-select-accounts" id="category">
                                                    <option selected="">Select category</option>
                                                    {category.forEach(function (category, i) {
                                                        <option value={category.categoryId}>{category.name}</option>;
                                                    })}
                                                </select>
                                            </div>
                                            <div className="row">
                                                <div className="form-group mb-3 col-xs-12 col-sm-6">
                                                    <label htmlFor="expire_date">Price</label>
                                                    <input
                                                        id="price"
                                                        name="price"
                                                        type="number"
                                                        min={0}
                                                        className="form-control validate"
                                                        data-large-mode="true"
                                                    />
                                                </div>
                                                <div className="form-group mb-3 col-xs-12 col-sm-6">
                                                    <label htmlFor="stock">Units In Stock</label>
                                                    <input
                                                        id="stock"
                                                        name="stock"
                                                        type="text"
                                                        className="form-control validate"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                                        <div className="tm-product-img-dummy mx-auto">
                                            {selectedFile && (
                                                <img
                                                    src={URL.createObjectURL(selectedFile)}
                                                    alt="Product Image"
                                                    className="img-fluid"
                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                                />
                                            )}
                                        </div>
                                        <div className="custom-file mt-3 mb-3">
                                            <input
                                                id="fileInput"
                                                type="file"
                                                style={{ display: 'none' }}
                                                onChange={handleFileChange}
                                            />
                                            <input
                                                type="button"
                                                className="btn btn-primary btn-block mx-auto"
                                                value="Upload image"
                                                onClick={handleUploadClick}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary btn-block text-uppercase">
                                            Create
                                        </button>
                                    </div>
                                </div>
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
        </>
    );
}

export default CreateArtWork;
