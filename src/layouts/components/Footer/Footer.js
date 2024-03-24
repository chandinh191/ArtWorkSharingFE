import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import logo from '../../../assets/img/logo.png';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <>
            {/* Footer Section Begin */}
            <footer className="footer">
                <div className="row" style={{ padding: '20px', backgroundColor: 'white' }}>
                    <div className="col-lg-4 col-md-6 col-sm-7">
                        <div className="footer__about">
                            <div className="footer__logo">
                                <a href="./index.html">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                            <p>
                                ArtHub is a vibrant online platform dedicated to art enthusiasts, collectors, and
                                creators alike.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-5">
                        <div className="footer__widget">
                            <h6>Quick links</h6>
                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Blogs</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="footer__widget">
                            <h6>Account</h6>
                            <ul>
                                <li>
                                    <a href="#">My Account</a>
                                </li>
                                <li>
                                    <a href="#">Orders Tracking</a>
                                </li>
                                <li>
                                    <a href="#">Checkout</a>
                                </li>
                                <li>
                                    <a href="#">Wishlist</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-sm-8">
                        <div className="footer__newslatter">
                            <h6>NEWSLETTER</h6>
                            <form action="#">
                                <input type="text" placeholder="Email" />
                                <button type="submit" className="site-btn">
                                    Subscribe
                                </button>
                            </form>
                            <div className="footer__social">
                                <a href="#">
                                    <i className="fa fa-facebook" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-youtube-play" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-instagram" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-pinterest" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        <div className="footer__copyright__text">
                            <p>
                                coder dinkr kao - ong than ux/ui .
                                <i className="fa fa-heart" aria-hidden="true" />. by .
                                <a href="https://www.facebook.com/profile.php?id=100009572831410" target="_blank">
                                    Chần Dinh
                                </a>
                            </p>
                        </div>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}
            {/* Search Begin */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/* Search End */}
        </>
    );
}

export default Footer;
