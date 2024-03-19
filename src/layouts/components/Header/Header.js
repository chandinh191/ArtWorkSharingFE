import classNames from 'classnames/bind';
import logo from '../../../assets/img/logo.png';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            {/* Header Section Begin */}
            <header className={cx('header')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('row')}>
                        <div className={cx('col-xl-3 col-lg-2')}>
                            <div className={cx('header__logo')}>
                                <a href="./">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className={cx('col-xl-6 col-lg-7')}>
                            <nav className={cx('header__menu')}>
                                <ul>
                                    <li className={cx('active')}>
                                        <a href="./index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Women’s</a>
                                    </li>
                                    <li>
                                        <a href="#">Men’s</a>
                                    </li>
                                    <li>
                                        <a href="./shop.html">Shop</a>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <ul className={cx('dropdown')}>
                                            <li>
                                                <a href="./product-details.html">Product Details</a>
                                            </li>
                                            <li>
                                                <a href="./shop-cart.html">Shop Cart</a>
                                            </li>
                                            <li>
                                                <a href="./checkout.html">Checkout</a>
                                            </li>
                                            <li>
                                                <a href="./blog-details.html">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="./blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="./contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={cx('col-lg-3')}>
                            <div className={cx('header__right')}>
                                <div className={cx('header__right__auth')}>
                                    <a href="/SignUp">Login</a>
                                    <a href="/SignIn">Register</a>
                                </div>
                                <ul className={cx('header__right__widget')}>
                                    <li>
                                        <span className={cx('icon_search search-switch')} />
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className={cx('icon_heart_alt')} />
                                            <div className={cx('tip')}>2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className={cx('icon_bag_alt')} />
                                            <div className={cx('tip')}>2</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('canvas__open')}>
                        <i className={cx('fa fa-bars')} />
                    </div>
                </div>
            </header>
            {/* Header Section End */}
        </>
    );
}

export default Header;
