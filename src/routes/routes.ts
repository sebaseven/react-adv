import {FC,lazy} from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
//import { LazyPage1,LazyPage2,LazyPage3 } from "../01-lazyload/pages";

interface Route {
    to: string;
    path: string;
    Component: FC;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPageLayout" */"../01-lazyload/layout/LazyLayout"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../01-lazyload/pages/LazyPage3"));

export const routes:Route[]= [
    {
        to: "/lazyload",
        path: "lazyload/*",
        Component: LazyLayout,
        name: "Lazy Layout",
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "No Lazy",
    },
];
