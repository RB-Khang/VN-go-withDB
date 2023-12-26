export interface RouteItem {
    name: string;
    children: RouteArray;
}
export type RouteArray = RouteItem[];

const Route: RouteArray = [
    {
        name: 'dashboard',
        children: [
            {
                name: 'igo',
                children: [
                    {
                        name: 'resource',
                        children: [],
                    },
                    {
                        name: 'club',
                        children: [],
                    },
                ],
            },
            {
                name: 'music',
                children: [
                    {
                        name: 'blogs',
                        children: [],
                    },
                ],
            },
        ],
    },
];

export default Route;
