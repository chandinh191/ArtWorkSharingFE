import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Contact from '~/pages/Contact';
import BlogDetails from '~/pages/BlogDetails';
import Shop from '~/pages/Shop';
import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.blogdetails, component: BlogDetails },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.signup, component: SignUp, layout: null },
    { path: config.routes.signin, component: SignIn, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
