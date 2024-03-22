import React, { useEffect, useState } from 'react';
import axios from 'axios';
function ArtistProfile() {
    const [artWork, setArtwork] = useState([]);
    useEffect(() => {
        // Make the API request
        axios
            .get(`https://localhost:7178/api/ArtWork/GetAll`)
            .then((response) => {
                // Update the state with the fetched data
                setArtwork(response.data);
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
                                <span>My Art Work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button>Create</button>
            {/* Breadcrumb End */}
            {/* Shop Section Begin */}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="shop__sidebar">
                                <div className="sidebar__categories">
                                    <div className="section-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <div className="categories__accordion">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="card-heading active">
                                                    <a data-toggle="collapse" data-target="#collapseOne">
                                                        Women
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseOne"
                                                    className="collapse show"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseTwo">
                                                        Men
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseTwo"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseThree">
                                                        Kids
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseThree"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFour">
                                                        Accessories
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseFour"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFive">
                                                        Cosmetic
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseFive"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div class="tm-product-table-container">
                                        <table class="table table-hover tm-table-small tm-product-table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Art Work NAME</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">&nbsp;</th>
                                                    <th scope="col">&nbsp;</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {artWork.map(function (artWork) {
                                                    return (
                                                        <React.Fragment key={artWork.artWorkId}>
                                                            <td className="tm-product-name">{artWork.name}</td>
                                                            <td>{artWork.Description}</td>
                                                            <td>{artWork.ArtWorkStatus}</td>
                                                            <td>{artWork.Price}</td>
                                                            <td>
                                                                <a href="#" className="tm-product-delete-link">
                                                                    <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="tm-product-delete-link">
                                                                    <i className="far fa-trash-alt tm-product-delete-icon"></i>
                                                                </a>
                                                            </td>
                                                        </React.Fragment>
                                                    );
                                                })}
                                                <td class="tm-product-name">Lorem Ipsum Product 2</td>
                                                <td>1,250</td>
                                                <td>750</td>
                                                <td>21 March 2019</td>
                                                <td>
                                                    <a href="#" class="tm-product-delete-link">
                                                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#" class="tm-product-delete-link">
                                                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                                    </a>
                                                </td>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section End */}
            {/* Instagram End */}
        </div>
    );
}

export default ArtistProfile;
