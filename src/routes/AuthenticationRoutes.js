import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import Settings from 'layout/MainLayout/components/settings/Settings';
import Services from 'layout/MainLayout/components/services/Services';
import Emails from 'layout/MainLayout/components/emails/Emails';
import Products from 'layout/MainLayout/components/Products/Products';
import Users from 'layout/MainLayout/components/Users/Users';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/pages/login/login3',
            element: <AuthLogin3 />
        },
        {
            path: '/pages/register/register3',
            element: <AuthRegister3 />
        },
        {
            path: '/settings',
            element: <Settings />
        },
        {
            path: '/services',
            element: <Services />
        },
        {
            path: '/email',
            element: <Emails />
        },
        {
            path: '/products',
            element: <Products />
        },
        {
            path: '/users',
            element: <Users />
        },
    ]
};

export default AuthenticationRoutes;
