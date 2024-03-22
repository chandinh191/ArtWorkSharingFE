import React from 'react';
import img1 from '../../assets/img/shop/shop-1.jpg';
import img2 from '../../assets/img/shop/shop-2.jpg';
import img3 from '../../assets/img/shop/shop-3.jpg';
import img4 from '../../assets/img/shop/shop-4.jpg';
import img5 from '../../assets/img/shop/shop-5.jpg';
import img6 from '../../assets/img/shop/shop-6.jpg';
import img7 from '../../assets/img/shop/shop-7.jpg';
import img8 from '../../assets/img/shop/shop-8.jpg';
import img9 from '../../assets/img/shop/shop-9.jpg';

import img_insta1 from '../../assets/img/instagram/insta-1.jpg';
import img_insta2 from '../../assets/img/instagram/insta-2.jpg';
import img_insta3 from '../../assets/img/instagram/insta-3.jpg';
import img_insta4 from '../../assets/img/instagram/insta-4.jpg';
import img_insta5 from '../../assets/img/instagram/insta-5.jpg';
import img_insta6 from '../../assets/img/instagram/insta-6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
function Shop() {
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
                                                <div>
                                                    <a data-toggle="collapse" data-target="#collapseOne">
                                                        Cate1
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div>
                                                    <a data-toggle="collapse" data-target="#collapseOne">
                                                        Cate2
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div>
                                                    <a data-toggle="collapse" data-target="#collapseOne">
                                                        Cate3
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div>
                                                    <a data-toggle="collapse" data-target="#collapseOne">
                                                        Cate4
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{ backgroundImage: `url(${img1})` }}
                                        >
                                            <div className="label new">New</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-1.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
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
                                                <a href="#">Furry hooded parka</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{ backgroundImage: `url(${img2})` }}
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-2.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
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
                                                <a href="#">Flowy striped skirt</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 49.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{ backgroundImage: `url(${img3})` }}
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-3.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
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
                                                <a href="#">Croc-effect bag</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{ backgroundImage: `url(${img4})` }}
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-4.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
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
                                                <a href="#">Dark wash Xavi jeans</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item sale">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{ backgroundImage: `url(${img5})` }}
                                        >
                                            <div className="label">Sale</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-5.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
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
                                                <a href="#">Ankle-cuff sandals</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">
                                                $ 49.0 <span>$ 59.0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{ backgroundImage: `url(${img6})` }}
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-6.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
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
                                                <a href="#">Contrasting sunglasses</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{ backgroundImage: `url(${img7})` }}
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-7.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
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
                                                <a href="#">Circular pendant earrings</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{ backgroundImage: `url(${img8})` }}
                                        >
                                            <div className="label stockout stockblue">Out Of Stock</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-8.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
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
                                                <a href="#">Cotton T-Shirt</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item sale">
                                        <div
                                            className="product__item__pic set-bg"
                                            style={{ backgroundImage: `url(${img9})` }}
                                        >
                                            <div className="label">Sale</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-9.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
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
                                                <a href="#">Water resistant zips backpack</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">
                                                $ 49.0 <span>$ 59.0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <div className="pagination__option">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">
                                            <i className="fa fa-angle-right" />
                                        </a>
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
        </div>
    );
}

export default Shop;
