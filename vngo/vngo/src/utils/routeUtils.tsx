import { useRouter } from 'next/navigation';
import { RouteItem, RouteArray } from '@/constant/route';
import Router from '@/constant/route';

export default function useRoute() {
    const router = useRouter();

    function redirect(routeName: string, routes: RouteArray = Router, prefix?: string): void {
        for (const route of routes) {
            const path = prefix ? prefix + '/' + route.name : route.name;
            if (route.name === routeName) {
                router.push(path);
            }
            redirect(routeName, route.children, path);
        }
    }

    return { redirect };
}
