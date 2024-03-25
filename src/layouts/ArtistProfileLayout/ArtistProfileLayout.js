import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import styles from './ArtistProfileLayout.module.scss';

const cx = classNames.bind(styles);

function ArtistProfileLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
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
                                                        <a className="w3-bar-item w3-button">Wishlist Artwork</a>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div>
                                                        <a className="w3-bar-item w3-button">Ownered Artwork</a>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div>
                                                        <a className="w3-bar-item w3-button">Order Artwork</a>
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
                            <div className="col-lg-9 col-md-9">{children}</div>
                        </div>
                    </div>
                </section>
                {/* Shop Section End */}
            </div>

            <Footer />
        </div>
    );
}

ArtistProfileLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ArtistProfileLayout;
