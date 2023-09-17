import { Routes, Route, NavLink, Navigate, BrowserRouter } from 'react-router-dom';
import {Suspense} from 'react';
import logo from '../logo.svg'
//import {LazyPage1,LazyPage2,LazyPage3} from '../01-lazyload/pages';
import { routes } from './routes';
export const Navigation = () => {
    return (
        <Suspense fallback={ <div>Loading...</div> }>
 <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        {
                            routes.map( (route) => (
                                <li key={ route.path }>
                                    <NavLink to={ route.path } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{ route.name }</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map( (route) => (
                            <Route key={ route.to } path={ route.path } element={ <route.Component/> } />
                        ))
                    }
                    <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
            </Suspense>
       
    )
}
