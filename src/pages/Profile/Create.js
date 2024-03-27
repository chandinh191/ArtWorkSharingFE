import React, { useEffect, useState } from 'react';
import '~/assets/css/templatemo-style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { Cloudinary } from "@cloudinary/url-gen";

import appsetting from '../../appsetting.json';
const { SERVER_API } = appsetting;

function CreateArtWork() {
    const cld = new Cloudinary({ cloud: { cloudName: 'doatgdqwk' } });
    const userId = localStorage.getItem('userid');
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    };
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        categoryId: '',
        price: Number,
        artWorkStatus: Number,
    });
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Upload the image to Cloudinary
        if (!formData.name.trim()) {
            alert('Please enter Art Work Name');
            return;
        }
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(formData.name)) {
            alert('Art Work Name should not contain numbers or special characters');
            return;
        }
        if (formData.description.length > 500) {
            alert('Description must be at most 500 characters');
            return;
        }
        if (!formData.categoryId) {
            alert('Please select a category');
            return;
        }

        if (!formData.price || isNaN(formData.price)) {
            alert('Please enter a valid price');
            return;
        }
        if (formData.price < 0 || formData.price > 10000) {
            alert('Price must be between 0 and 10,000');
            return;
        }
        // Upload image validation
        if (!selectedFile) {
            alert('Please upload an image');
            return;
        }
        const allowedTypes = ['image/jpeg', 'image/png']; // Add more types if necessary

        if (!allowedTypes.includes(selectedFile.type)) {
            alert('Please select a valid image file (JPEG, PNG)');
            return;
        }
        // Create a formData object to send to Cloudinary
        const imageData = new FormData();
        imageData.append('file', selectedFile);
        imageData.append('upload_preset', preset_key);

        // Send the image to Cloudinary
        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                method: 'POST',
                body: imageData,
            });

            const data = await response.json();

            console.log(data.secure_url);
            // Set the uploaded image URL
            if (data.secure_url) {
                try {
                    // Create the requestBody object with the imageUrl
                    const requestBody = JSON.stringify({
                        userAccountId: userId,
                        userOwnerId: userId,
                        categoryId: formData.categoryId,
                        name: formData.name,
                        description: formData.description,
                        price: formData.price,
                        imageUrl: data.secure_url, // Use the Cloudinary image URL here
                    });

                    console.log(requestBody); // Log the body before making the fetch call

                    // Make the fetch call
                    const res = await fetch(`${SERVER_API}/Artwork/Add`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: requestBody,
                    });

                    if (res.ok) {
                        alert('Artwork updated successfully');
                        window.location.reload(); // Reload the page if the request is successful
                    } else {
                        console.error('Error:', res.statusText); // Log error message if request fails
                    }
                } catch (error) {
                    console.error('Error posting data:', error); // Log error if fetch fails
                }
            } else {
                console.error('Image URL is not available.'); // Log error if imageUrl is not available
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }

    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const preset_key = "df8pqawi";
    const cloud_name = "doatgdqwk";
    const handleImageUpload = async () => {
        // Check if a file was selected
        if (!selectedFile) return;

        // Create a formData object to send to Cloudinary
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', preset_key);

        // Send the image to Cloudinary
        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            console.log(data.secure_url);
            // Set the uploaded image URL
            setImageUrl(data.secure_url);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make the API request
                const response = await axios.get(`${SERVER_API}/Category/GetAll`);
                // Update the state with the fetched data
                setCategories(response.data);
            } catch (error) {
                // Handle any errors here
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the async function
    }, []);

    return (
        <>
            <section className="shop spad">
                <div className="container" style={{ padding: '30px 15px' }}>
                    <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="tm-block-title d-inline-block">Add Product</h2>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="row tm-edit-product-row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="tm-edit-product-form">
                                    <div className="form-group mb-3">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder='Art Work Name'
                                            className="form-control validate"
                                            required=""
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea
                                            id="description"
                                            name="description"
                                            className="form-control validate"
                                            rows={3}
                                            placeholder='Description'
                                            required=""
                                            defaultValue={''}
                                            value={formData.description}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <select
                                            className="custom-select tm-select-accounts"
                                            id="categoryId"
                                            name="categoryId"
                                            value={formData.categoryId}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select category</option>
                                            {categories.map((category, i) => (
                                                <option key={i} value={category.id}>
                                                    {category.categoryName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                                            <input
                                                id="price"
                                                name="price"
                                                type="number"
                                                placeholder='price'
                                                min={0}
                                                className="form-control validate"
                                                data-large-mode="true"
                                                value={formData.price}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <select
                                            className="custom-select tm-select-accounts mb-3 col-xs-12 col-sm-5"
                                            id="artWorkStatus"
                                            name="artWorkStatus"
                                            value={formData.artWorkStatus}
                                            onChange={handleChange}
                                        >
                                            <option value="1">Active</option>
                                            <option value="0">InActive</option>
                                        </select>
                                    </div>
                                </div>
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
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CreateArtWork;
