import { useRouter } from 'next/navigation';
import { RouteArray } from '@/constant/route';
import Router from '@/constant/route';

export default function useRoute() {
    const Route = useRouter();

    function getPath(key?: string, arr: RouteArray = Router): string {
        for (const route of arr) {
            if (route.name === key) {
                return route.url;
            }

            if (Array.isArray(route.children) && route.children.length > 0) {
                const childPath = getPath(key, route.children);
                if (childPath) {
                    return childPath;
                }
            }
        }
        return '';
    }

    function redirect(key: string) {
        if (getPath(key)) {
            const url = new URL(getPath(key), window.location.origin);
            Route.push(url.href);
        }
    }
    return { redirect };
}
