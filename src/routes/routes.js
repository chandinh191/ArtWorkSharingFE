import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';
import { ArtistProfileLayout } from '~/layouts';
// Pages
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import BlogDetails from '~/pages/BlogDetails';
import Shop from '~/pages/Shop';
import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';
import ProductDetail from '~/pages/ProductDetail';
import Cart from '~/pages/Cart';
import CheckOut from '~/pages/CheckOut';
import ArtistProfile from '~/pages/Profile';
import CreateArtWork from '~/pages/Profile/Create';
import ArtistArtWork from '~/pages/Profile/MyArtwork';
import ArtworkOrdered from '~/pages/Profile/ArtworkOrdered';
import OrderCompleted from '~/pages/Profile/OrderCompleted';
import RequestArtwork from '~/pages/Profile/RequestArtwork';
import Wishlist from '~/pages/Profile/Wishlist';
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.productDetail, component: ProductDetail },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: CheckOut },
    { path: config.routes.contact, component: Contact },

    { path: config.routes.artistProfile, component: ArtistProfile, layout: ArtistProfileLayout },
    { path: config.routes.createArtWork, component: CreateArtWork, layout: ArtistProfileLayout },
    { path: config.routes.artistArtWork, component: ArtistArtWork, layout: ArtistProfileLayout },
    { path: config.routes.wishlist, component: Wishlist, layout: ArtistProfileLayout },
    { path: config.routes.requestArtwork, component: RequestArtwork, layout: ArtistProfileLayout },
    { path: config.routes.artworkOrdered, component: ArtworkOrdered, layout: ArtistProfileLayout },
    { path: config.routes.orderCompleted, component: OrderCompleted, layout: ArtistProfileLayout },

    { path: config.routes.blogdetails, component: BlogDetails },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.signup, component: SignUp, layout: null },
    { path: config.routes.signin, component: SignIn, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
