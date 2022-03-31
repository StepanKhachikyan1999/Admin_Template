// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Pages',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                },
                {
                    id: 'settings',
                    title: 'Settings',
                    type: 'item',
                    url: '/settings',
                    target: true
                },
                {
                    id: 'services',
                    title: 'Services',
                    type: 'item',
                    url: '/services',
                    target: true
                },
                {
                    id: 'users',
                    title: 'Users',
                    type: 'item',
                    url: '/users',
                    target: true
                },
                {
                    id: 'products',
                    title: 'Products',
                    type: 'item',
                    url: '/products',
                    target: true
                },
                {
                    id: 'email',
                    title: 'Email',
                    type: 'item',
                    url: '/email',
                    target: true
                },
            ]
        }
    ]
};

export default pages;
