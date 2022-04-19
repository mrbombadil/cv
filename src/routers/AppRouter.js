import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import { Curriculum } from '../pages/Curriculum';
import { Home } from '../pages/Home';
import { Portfolio } from '../pages/Portfolio';
//import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Nav id='navContainer' className='nav' />
            <Header id='headerContainer' className='header' />
            <Routes>                
                <Route path="/" element={ <Home /> } />
                <Route path="/curriculum" element={ <Curriculum /> } />
                <Route path="/portfolio" element={ <Portfolio /> } />

                {
                 //   <Route path="/*" element={ <DashboardRoutes /> } />
                }
            </Routes>
        </BrowserRouter>
    )
}