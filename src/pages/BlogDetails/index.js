import React from 'react';
import img1 from '../../assets/img/blog/details/blog-details.jpg';
import img_cmt1 from '../../assets/img/blog/details/comment-1.jpg';
import img_cmt2 from '../../assets/img/blog/details/comment-2.jpg';
import img_cmt3 from '../../assets/img/blog/details/comment-3.jpg';

import img_sb1 from '../../assets/img/blog/sidebar/fp-1.jpg';
import img_sb2 from '../../assets/img/blog/sidebar/fp-2.jpg';
import img_sb3 from '../../assets/img/blog/sidebar/fp-3.jpg';

import img_insta1 from '../../assets/img/instagram/insta-1.jpg';
import img_insta2 from '../../assets/img/instagram/insta-2.jpg';
import img_insta3 from '../../assets/img/instagram/insta-3.jpg';
import img_insta4 from '../../assets/img/instagram/insta-4.jpg';
import img_insta5 from '../../assets/img/instagram/insta-5.jpg';
import img_insta6 from '../../assets/img/instagram/insta-6.jpg';

function BlogDetails() {
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
                                <a href="./blog.html">Blog</a>
                                <span>Being seen: how is age diversity effecting change in fashion and beauty?</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Blog Details Section Begin */}
            <section className="blog-details spad">
                <div className="container">
                    <div className="row" style={{ padding: '50px' }}>
                        <div className="col-lg-8 col-md-8">
                            <div className="blog__details__content">
                                <div className="blog__details__item">
                                    <img src={img1} alt="" />
                                    <div className="blog__details__item__title">
                                        <span className="tip">Street style</span>
                                        <h4>
                                            Being seen: how is age diversity effecting change in fashion and beauty?
                                        </h4>
                                        <ul>
                                            <li>
                                                by <span>Ema Timahe</span>
                                            </li>
                                            <li>Seb 17, 2019</li>
                                            <li>39 Comments</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog__details__desc">
                                    <p>
                                        Afashion season can be defined as much by the people on the catwalk as it can by
                                        the clothes they are wearing. This time around, a key moment came at the end of
                                        Marc Jacobs’ New York show, when an almost makeup-free Christy Turlington made a
                                        rare return to the catwalk, aged 50 (she also stars, with the designer himself,
                                        in the label’s AW ad campaign), where the average catwalk model is around 18.
                                    </p>
                                    <p>
                                        A few days later, Simone Rocha arguably upped the ante. The 32-year-old’s show –
                                        in part inspired by Louise Bourgeois, who lived until she was 98 – featured
                                        models in their 30s and 40s, including cult favourite Jeny Howorth and actor
                                        Chloë Sevigny.
                                    </p>
                                </div>
                                <div className="blog__details__quote">
                                    <div className="icon">
                                        <i className="fa fa-quote-left" />
                                    </div>
                                    <p>
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <div className="blog__details__desc">
                                    <p>
                                        Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                        id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate.
                                    </p>
                                </div>
                                <div className="blog__details__tags">
                                    <a href="#">Fashion</a>
                                    <a href="#">Street style</a>
                                    <a href="#">Diversity</a>
                                    <a href="#">Beauty</a>
                                </div>
                                <div className="blog__details__btns">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog__details__btn__item">
                                                <h6>
                                                    <a href="#">
                                                        <i className="fa fa-angle-left" /> Previous posts
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog__details__btn__item blog__details__btn__item--next">
                                                <h6>
                                                    <a href="#">
                                                        Next posts <i className="fa fa-angle-right" />
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__details__comment">
                                    <h5>3 Comment</h5>
                                    <a href="#" className="leave-btn">
                                        Leave a comment
                                    </a>
                                    <div className="blog__comment__item">
                                        <div className="blog__comment__item__pic">
                                            <img src={img_cmt1} alt="" />
                                        </div>
                                        <div className="blog__comment__item__text">
                                            <h6>Brandon Kelley</h6>
                                            <p>
                                                Duis voluptatum. Id vis consequat consetetur dissentiet, ceteros commune
                                                perpetua mei et. Simul viderer facilisis egimus tractatos splendi.
                                            </p>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-clock-o" /> Seb 17, 2019
                                                </li>
                                                <li>
                                                    <i className="fa fa-heart-o" /> 12
                                                </li>
                                                <li>
                                                    <i className="fa fa-share" /> 1
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog__comment__item blog__comment__item--reply">
                                        <div className="blog__comment__item__pic">
                                            <img src={img_cmt2} alt="" />
                                        </div>
                                        <div className="blog__comment__item__text">
                                            <h6>Brandon Kelley</h6>
                                            <p>
                                                Consequat consetetur dissentiet, ceteros commune perpetua mei et. Simul
                                                viderer facilisis egimus ulla mcorper.
                                            </p>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-clock-o" /> Seb 17, 2019
                                                </li>
                                                <li>
                                                    <i className="fa fa-heart-o" /> 12
                                                </li>
                                                <li>
                                                    <i className="fa fa-share" /> 1
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog__comment__item">
                                        <div className="blog__comment__item__pic">
                                            <img src={img_cmt3} alt="" />
                                        </div>
                                        <div className="blog__comment__item__text">
                                            <h6>Brandon Kelley</h6>
                                            <p>
                                                Duis voluptatum. Id vis consequat consetetur dissentiet, ceteros commune
                                                perpetua mei et. Simul viderer facilisis egimus tractatos splendi.
                                            </p>
                                            <ul>
                                                <li>
                                                    <i className="fa fa-clock-o" /> Seb 17, 2019
                                                </li>
                                                <li>
                                                    <i className="fa fa-heart-o" /> 12
                                                </li>
                                                <li>
                                                    <i className="fa fa-share" /> 1
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="blog__sidebar">
                                <div className="blog__sidebar__item">
                                    <div className="section-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                All <span>(250)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Fashion week <span>(80)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Street style <span>(75)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Lifestyle <span>(35)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Beauty <span>(60)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog__sidebar__item">
                                    <div className="section-title">
                                        <h4>Feature posts</h4>
                                    </div>
                                    <a href="#" className="blog__feature__item">
                                        <div className="blog__feature__item__pic">
                                            <img src={img_sb1} alt="" />
                                        </div>
                                        <div className="blog__feature__item__text">
                                            <h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
                                            <span>Seb 17, 2019</span>
                                        </div>
                                    </a>
                                    <a href="#" className="blog__feature__item">
                                        <div className="blog__feature__item__pic">
                                            <img src={img_sb2} alt="" />
                                        </div>
                                        <div className="blog__feature__item__text">
                                            <h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
                                            <span>Seb 17, 2019</span>
                                        </div>
                                    </a>
                                    <a href="#" className="blog__feature__item">
                                        <div className="blog__feature__item__pic">
                                            <img src={img_sb3} alt="" />
                                        </div>
                                        <div className="blog__feature__item__text">
                                            <h6>Amf Cannes Red Carpet Celebrities Kend...</h6>
                                            <span>Seb 17, 2019</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="blog__sidebar__item">
                                    <div className="section-title">
                                        <h4>Tags cloud</h4>
                                    </div>
                                    <div className="blog__sidebar__tags">
                                        <a href="#">Fashion</a>
                                        <a href="#">Street style</a>
                                        <a href="#">Diversity</a>
                                        <a href="#">Beauty</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Details Section End */}
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

export default BlogDetails;
