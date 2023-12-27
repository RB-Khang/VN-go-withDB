export interface RouteItem {
    name: string;
    url: string;
    children?: RouteArray;
}
export type RouteArray = RouteItem[];

const Route: RouteArray = [
    {
        name: 'dashboard',
        url: '/',
        children: [
            {
                name: 'igo',
                url: '/igo/',
                children: [
                    {
                        name: 'resource',
                        url: 'dashboard/igo/resource',
                        children: [],
                    },
                    {
                        name: 'club',
                        url: 'dashboard/igo/club',
                        children: [],
                    },
                ],
            },
            {
                name: 'music',
                url: '/music',
                children: [
                    {
                        name: 'blogs',
                        url: 'dashboard/music/blogs',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        name: 'free-course',
        url: 'courses/free',
        children: [],
    },
];

export default Route;
