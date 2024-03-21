import React, { useEffect, useState } from 'react';
import discount_png from '../../assets/img/discount.jpg';
import axios from 'axios';
import moment from 'moment';

function Home() {
    useEffect(() => {
        const loadScripts = async () => {
            await loadScript(`${process.env.PUBLIC_URL}/js/jquery-3.3.1.min.js`);
            await loadScript(`${process.env.PUBLIC_URL}/js/bootstrap.min.js`);
            await loadScript(`${process.env.PUBLIC_URL}/js/jquery.magnific-popup.min.js`);
            await loadScript(`${process.env.PUBLIC_URL}/js/jquery-ui.min.js`);
            await loadScript(`${process.env.PUBLIC_URL}/js/mixitup.min.js`);
            await loadScript(`${process.env.PUBLIC_URL}/js/jquery.countdown.min.js`);
            await loadScript(`${process.env.PUBLIC_URL}/js/jjquery.slicknav.js`);
            await loadScript(`${process.env.PUBLIC_URL}/js/owl.carousel.min.js`);
            await loadScript(`${process.env.PUBLIC_URL}/js/jquery.nicescroll.min.js`);
            await loadScript(`${process.env.PUBLIC_URL}/js/main.js`);
            // Your jQuery-dependent logic here
        };
        loadScripts();
        return () => {
            // Cleanup logic if needed
        };
    }, []);

    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            //document.body.appendChild(script);
        });
    };

    const [artworks, setArtworks] = useState([]);
    useEffect(() => {
        // Make the API request
        axios
            .get(`https://localhost:7178/api/ArtWork/GetAll`)
            .then((response) => {
                // Update the state with the fetched data
                setArtworks(response.data);
            })
            .catch((error) => {
                // Handle any errors here
                console.error('Error fetching data:', error);
            });
    }, []);

    // Hàm kiểm tra xem artwork.created có nằm trong 7 ngày gần đây không
    const isWithinLastWeek = (created) => {
        const oneWeekAgo = moment().subtract(7, 'days');
        return moment(created).isAfter(oneWeekAgo);
    };

    return (
        <>
            {/* Categories Section Begin */}
            <section className="categories">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div
                                className="categories__item categories__large__item set-bg"
                                style={{
                                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/categories/category-1.jpg')`,
                                }}
                            >
                                <div className="categories__text">
                                    <h2>Category 1</h2>
                                    <p>2 items</p>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div
                                        className="categories__item set-bg"
                                        style={{
                                            backgroundImage: `url('${process.env.PUBLIC_URL}/images/categories/category-2.jpg')`,
                                        }}
                                    >
                                        <div className="categories__text">
                                            <h4>Men’s fashion</h4>
                                            <p>358 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div
                                        className="categories__item set-bg"
                                        style={{
                                            backgroundImage: `url('${process.env.PUBLIC_URL}/images/categories/category-3.jpg')`,
                                        }}
                                    >
                                        <div className="categories__text">
                                            <h4>Kid’s fashion</h4>
                                            <p>273 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div
                                        className="categories__item set-bg"
                                        style={{
                                            backgroundImage: `url('${process.env.PUBLIC_URL}/images/categories/category-4.jpg')`,
                                        }}
                                    >
                                        <div className="categories__text">
                                            <h4>Cosmetics</h4>
                                            <p>159 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div
                                        className="categories__item set-bg"
                                        style={{
                                            backgroundImage: `url('${process.env.PUBLIC_URL}/images/categories/category-5.jpg')`,
                                        }}
                                    >
                                        <div className="categories__text">
                                            <h4>Accessories</h4>
                                            <p>792 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section End */}
            {/* Product Section Begin */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>New ArtWork</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <ul className="filter__controls">
                                <li className="active">ArtWorks for last week</li>
                            </ul>
                        </div>
                        {/* <div className="col-lg-8 col-md-8">
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">
                                    All
                                </li>
                                <li data-filter=".women">Women’s</li>
                                <li data-filter=".men">Men’s</li>
                                <li data-filter=".kid">Kid’s</li>
                                <li data-filter=".accessories">Accessories</li>
                                <li data-filter=".cosmetic">Cosmetics</li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="row property__gallery">
                        {artworks
                            .sort((a, b) => new Date(b.created) - new Date(a.created)) // Sắp xếp theo thời gian tạo mới nhất
                            .slice(0, 8) // Chỉ lấy 8 tác phẩm đầu tiên sau khi đã sắp xếp
                            .map(
                                (artwork) =>
                                    isWithinLastWeek(artwork.created) && (
                                        <div className="col-lg-3 col-md-4 col-sm-6 mix women" key={artwork.id}>
                                            <div className="product__item">
                                                <div
                                                    className="product__item__pic set-bg"
                                                    style={{
                                                        backgroundImage: `url('${artwork.imageUrl}')`,
                                                    }}
                                                >
                                                    {/* {artwork.isSold && <div className="label stockout">Sold</div>} */}
                                                    {artwork.isPreOrder ? (
                                                        <div className="label stockout">PreOrder</div>
                                                    ) : (
                                                        <div className="label new">New</div>
                                                    )}

                                                    <ul className="product__hover">
                                                        <li>
                                                            <a href="img/product/product-1.jpg" className="image-popup">
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
                                                        <a href="#">{artwork.name}</a>
                                                    </h6>
                                                    <div className="rating">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </div>
                                                    <div className="product__price">${artwork.price}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ),
                            )}
                    </div>
                </div>
            </section>
            {/* Product Section End */}

            {/* Trend Section Begin */}
            <section className="trend spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Hot</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={process.env.PUBLIC_URL + '/images/trend/ht-1.jpg'} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Chain bucket bag</h6>
                                        <div className="rating">
                                            <i className="fa fa-star" style={{ padding: '2px' }} />
                                            <i className="fa fa-star" style={{ padding: '2px' }} />
                                            <i className="fa fa-star" style={{ padding: '2px' }} />
                                            <i className="fa fa-star" style={{ padding: '2px' }} />
                                            <i className="fa fa-star" style={{ padding: '2px' }} />
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={process.env.PUBLIC_URL + '/images/trend/ht-2.jpg'} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Pendant earrings</h6>
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
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={process.env.PUBLIC_URL + '/images/trend/ht-3.jpg'} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Cotton T-Shirt</h6>
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
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Best Exchange</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={process.env.PUBLIC_URL + '/images/trend/bs-1.jpg'} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Cotton T-Shirt</h6>
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
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={process.env.PUBLIC_URL + '/images/trend/bs-2.jpg'} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>
                                            Zip-pockets pebbled tote <br />
                                            briefcase
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
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={process.env.PUBLIC_URL + '/images/trend/bs-3.jpg'} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Round leather bag</h6>
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
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Best Artist</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={process.env.PUBLIC_URL + '/images/trend/f-1.jpg'} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Bow wrap skirt</h6>
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
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={process.env.PUBLIC_URL + '/images/trend/f-2.jpg'} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Metallic earrings</h6>
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
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={process.env.PUBLIC_URL + '/images/trend/f-3.jpg'} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Flap cross-body bag</h6>
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
                        </div>
                    </div>
                </div>
            </section>
            {/* Trend Section End */}

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
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
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
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
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
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
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
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
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
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
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
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
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

export default Home;
