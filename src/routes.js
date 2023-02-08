import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Services from './pages/Services';
import Team from './pages/Team';
import Contracts from './pages/Contracts';
import NotFound from './pages/Page404';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
// import SafuReports from './pages/SafuReports';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import UploadImages from './pages/UploadImages';
import Adminpage from './pages/Admin/Adminpage';
import PortfolioDetailpage from './pages/PortfolioDetailpage';
import Portfolioupdate from './pages/Admin/Portfolioupdate';
import UnderMaintainance from './pages/UnderMaintainance';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <DashboardApp /> },
        { path: 'create-token', element: <User /> },
        { path: 'partners', element: <UnderMaintainance /> },
        { path: 'services', element: <UnderMaintainance /> },
        { path: 'our-team', element: <UnderMaintainance /> },
        { path: 'dapps-built-by-us', element: <UnderMaintainance /> },
        { path: 'contracts-by-us', element: <UnderMaintainance /> },
        { path: '/portfolio-detail/:generateslug/:id', element: <UnderMaintainance /> },
        // { path: 'safu-reports', element: <SafuReports /> },
        // { path: 'portfolio', element: <Blog /> },
        { path: 'admin-page', element: <UnderMaintainance /> },
        { path: '/update/:id', element: <UnderMaintainance /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/" /> },
        { path: 'contact-us', element: <Contact /> },
        { path: '404', element: <NotFound /> },
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: '*', element: <UnderMaintainance /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
    { path: '*', element: <UnderMaintainance /> },
  ]);
}
