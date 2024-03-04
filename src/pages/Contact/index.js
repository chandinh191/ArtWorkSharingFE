import React from 'react';

import img_insta1 from '../../assets/img/instagram/insta-1.jpg';
import img_insta2 from '../../assets/img/instagram/insta-2.jpg';
import img_insta3 from '../../assets/img/instagram/insta-3.jpg';
import img_insta4 from '../../assets/img/instagram/insta-4.jpg';
import img_insta5 from '../../assets/img/instagram/insta-5.jpg';
import img_insta6 from '../../assets/img/instagram/insta-6.jpg';

function Contact() {
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
                                <span>Contact</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Contact Section Begin */}
            <section className="contact spad">
                <div className="container">
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
                                            <p>160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161</p>
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
                                            <p>Support.photography@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact__form">
                                    <h5>SEND MESSAGE</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Name" />
                                        <input type="text" placeholder="Email" />
                                        <input type="text" placeholder="Website" />
                                        <textarea placeholder="Message" defaultValue={''} />
                                        <button type="submit" className="site-btn">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d-74.13283844036356!3d41.02757295168286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2sbd!4v1575917275626!5m2!1sen!2sbd"
                                    height={780}
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
                        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${img_insta1})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${img_insta2})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${img_insta3})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${img_insta4})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${img_insta5})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-md-6 col-sm-6 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${img_insta6})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
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
