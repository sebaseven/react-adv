import {FC,lazy} from "react";
//import { LazyPage1,LazyPage2,LazyPage3 } from "../01-lazyload/pages";

interface Route {
    to: string;
    path: string;
    Component: FC;
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */"../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../01-lazyload/pages/LazyPage3"));

export const routes:Route[]= [
    {
        to: "/lazy1",
        path: "lazy1",
        Component: Lazy1,
        name: "Lazy Page 1",
    },
    {
        to: "/lazy2",
        path: "lazy2",
        Component: Lazy2,
        name: "Lazy Page 2",
    },
    {
        to: "/lazy3",
        path: "lazy3",
        Component: Lazy3,
        name: "Lazy Page 3",
    },
];