import classNames from 'classnames/bind';
import logo from '../../../assets/img/logo.png';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

function Header() {
    const menuItems = [
        { path: '/', label: 'Home' },
        { path: '/Shop', label: 'Shop' },
        { path: '/blogdetails', label: 'Blog' },
        { path: '/Contact', label: 'Contact' },
        {
            path: '/ArtistProfile',
            label: 'Artist Profile',
            dropdown: [
                { path: '/ArtistProfile', label: 'Information' },
                { path: '/ArtWorkNoTao', label: 'ArtWork nó tạo' },
                { path: '/ArtWorkCuaNo', label: 'ArtWork của nó' },
                { path: '/OrderRequest', label: 'Order request' },
                { path: '/Transaction', label: 'Transaction' },
            ],
        },
    ];
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
                            <nav className="header__menu">
                                <ul>
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            {item.dropdown ? (
                                                <div>
                                                    <NavLink to={item.path} activeClassName="active">
                                                        {item.label}
                                                    </NavLink>
                                                    <ul className="dropdown">
                                                        {item.dropdown.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <NavLink to={subItem.path} activeClassName="active">
                                                                    {subItem.label}
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                <NavLink exact to={item.path} activeClassName="active">
                                                    {item.label}
                                                </NavLink>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className={cx('col-lg-3')}>
                            <div className={cx('header__right')}>
                                <div className={cx('header__right__auth')}>
                                    <a href="/SignIn">Login</a>
                                    <a href="/SignUp">Register</a>
                                </div>
                                <ul className={cx('header__right__widget')}>
                                    {/* <li>
                                        <span className={cx('icon_search search-switch')} />
                                    </li> */}
                                    {/* <li>
                                        <a href="#">
                                            <span className={cx('icon_heart_alt')} />
                                            <div className={cx('tip')}>2</div>
                                        </a>
                                    </li> */}
                                    <li>
                                        <a href="./Cart">
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
