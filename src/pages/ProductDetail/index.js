import React, { useEffect, useState } from 'react';
import img_avatar from '../../assets/img/avatar.jpg';
import img_product from '../../assets/img/product/details/product-2.jpg';
import appsetting from '../../appsetting.json';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const { SERVER_API } = appsetting;
function ProductDetail() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    console.log(id);
    const [artwork, setArtwork] = useState([]);

    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                const res = await fetch(`${SERVER_API}/ArtWork/GetById?id=${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (res.ok) {
                    const resData = await res.json(); // Extract JSON data from response
                    setArtwork(resData);
                } else {
                    console.error('Failed to fetch artwork');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchArtwork();
    }, [id]);
    console.log(artwork);
    return (
        <>
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./">
                                    <i className="fa fa-home" /> Home
                                </a>
                                <a href="#">ArtWork </a>
                                <span>Detail Information</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Product Details Section Begin */}
            <section className="product-details spad">
                <div className="container">
                    <div className="row" style={{ padding: '50px' }}>
                        <div className="col-lg-6">
                            <div className="product__details__pic">
                                {/* <img src={img_product} alt="" /> */}
                                <img src={artwork.imageUrl} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>{artwork.name}</h3>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <span>( 138 reviews )</span>
                                </div>
                                <div className="product__details__price">
                                    $ {artwork.price} {/*<span>$ 83.0</span> */}
                                </div>
                                <p>{artwork.description}</p>
                                <div className="product__details__button">
                                    <a href="#" className="cart-btn">
                                        <span className="icon_bag_alt" /> BUY NOW
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span className="icon_heart_alt" />
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="#">
                                                <span className="icon_adjust-horiz" />
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="product__details__widget">
                                    <ul>
                                        <li>
                                            <span>Artist :</span>
                                            <p>Free shipping</p>
                                        </li>
                                        <li>
                                            <span>Owner:</span>
                                            <p>Free shipping</p>
                                        </li>
                                        <li>
                                            <span>Category:</span>
                                            <p>{artwork.categoryId}</p>
                                        </li>

                                        <li>
                                            <span>On sale:</span>
                                            <i className="icon_check_alt green"></i>
                                        </li>
                                        <li>
                                            <span>PreOrder:</span>
                                            <i className="icon_close_alt red"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                            Reviews ( 2 )
                                        </a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                            Specification
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                            Reviews ( 2 )
                                        </a>
                                    </li> */}
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <h6>Description</h6>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret
                                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                            nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor
                                            si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                            loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione
                                            voluptatem sequi nesciunt. Nulla consequat massa quis enim.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                            pellentesque eu, pretium quis, sem.
                                        </p>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <h6>Specification</h6>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret
                                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                            nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor
                                            si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                            loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione
                                            voluptatem sequi nesciunt. Nulla consequat massa quis enim.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                            pellentesque eu, pretium quis, sem.
                                        </p>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <h6>Reviews ( 2 )</h6>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret
                                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                            nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor
                                            si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                            loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione
                                            voluptatem sequi nesciunt. Nulla consequat massa quis enim.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                            pellentesque eu, pretium quis, sem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Details Section End */}
            <div className="container">
                <div className="blog__details__comment">
                    <h5>3 Comment</h5>
                    <a href="#" className="leave-btn">
                        Leave a comment
                    </a>
                    <div className="blog__comment__item">
                        <div className="blog__comment__item__pic">
                            <img src={img_avatar} alt="" />
                        </div>
                        <div className="blog__comment__item__text">
                            <h6>Brandon Kelley</h6>
                            <p>
                                Duis voluptatum. Id vis consequat consetetur dissentiet, ceteros commune perpetua mei
                                et. Simul viderer facilisis egimus tractatos splendi.
                            </p>
                            <ul>
                                <li>
                                    <i className="fa fa-clock-o" /> Seb 17, 2019
                                </li>
                                {/* <li>
                                    <i className="fa fa-heart-o" /> 12
                                </li>
                                <li>
                                    <i className="fa fa-share" /> 1
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="blog__comment__item">
                        <div className="blog__comment__item__pic">
                            <img src={img_avatar} alt="" />
                        </div>
                        <div className="blog__comment__item__text">
                            <h6>Brandon Kelley</h6>
                            <p>
                                Duis voluptatum. Id vis consequat consetetur dissentiet, ceteros commune perpetua mei
                                et. Simul viderer facilisis egimus tractatos splendi.
                            </p>
                            <ul>
                                <li>
                                    <i className="fa fa-clock-o" /> Seb 17, 2019
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <div className="contact__form">
                        <form action="#">
                            <textarea placeholder="Enter your reviewing" defaultValue={''} />
                            <button type="submit" className="site-btn">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
