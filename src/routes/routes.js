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
import ArtistProfile from '~/pages/ArtistProfile';
import CreateArtWork from '~/pages/ArtistProfile/Create';
import ArtistArtWork from '~/pages/ArtistProfile/MyArtwork';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.productDetail, component: ProductDetail },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: CheckOut },
    { path: config.routes.contact, component: Contact },

    { path: config.routes.artistProfile, component: ArtistProfile, layout: ArtistProfileLayout },
    { path: config.routes.createArtWork, component: CreateArtWork },
    { path: config.routes.artistArtWork, component: ArtistArtWork, layout: ArtistProfileLayout },

    { path: config.routes.blogdetails, component: BlogDetails },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.signup, component: SignUp, layout: HeaderOnly },
    { path: config.routes.signin, component: SignIn, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
