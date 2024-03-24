import React from 'react';

import img_insta1 from '../../assets/img/instagram/insta-1.jpg';
import img_insta2 from '../../assets/img/instagram/insta-2.jpg';
import img_insta3 from '../../assets/img/instagram/insta-3.jpg';
import img_insta4 from '../../assets/img/instagram/insta-4.jpg';
import img_insta5 from '../../assets/img/instagram/insta-5.jpg';
import img_insta6 from '../../assets/img/instagram/insta-6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
function Contact() {
    return (
        <div>
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./">
                                    <i className="fa fa-home" /> Home
                                </a>
                                <span>Contact</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Contact Section Begin */}
            <section className="contact spad">
                <div className="container" style={{ padding: '50px' }}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__content">
                                <div className="contact__address">
                                    <h5>Contact info</h5>
                                    <ul>
                                        <li>
                                            <h6>
                                                <i className="fa fa-map-marker" /> Address
                                            </h6>
                                            <p>
                                                Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố
                                                Hồ Chí Minh 700000, Việt Nam
                                            </p>
                                        </li>
                                        <li>
                                            <h6>
                                                <i className="fa fa-phone" /> Phone
                                            </h6>
                                            <p>
                                                <span>125-711-811</span>
                                                <span>125-668-886</span>
                                            </p>
                                        </li>
                                        <li>
                                            <h6>
                                                <i className="fa fa-headphones" /> Support
                                            </h6>
                                            <p>Support.artworksharing@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.442256733738!2d106.82070231467687!3d10.838144160934011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a11f4d16d3%3A0x49c54ff67cf4e11f!2sFPT%20University%20Campus%20District%209!5e0!3m2!1sen!2sbd!4v1648199348144!5m2!1sen!2sbd"
                                    height={480}
                                    style={{ border: 0 }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section End */}
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

export default Contact;
