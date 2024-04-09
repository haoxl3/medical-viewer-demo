const routes = [
    {
        path: '/',
        component: '@/layouts/BasicLayout',
        routes: [
            {
                path: '/',
                redirect: '/viewer'
            },
            {
                path: '/viewer',
                component: '@/pages/detail'
            },
            {
                path: '/home',
                component: '@/pages/home'
            }
        ]
    }
];
export default routes;