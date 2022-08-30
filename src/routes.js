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

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <DashboardApp /> },
        { path: 'create-token', element: <User /> },
        { path: 'partners', element: <Products /> },
        { path: 'services', element: <Services /> },
        { path: 'our-team', element: <Team /> },
        { path: 'upload-images', element: <UploadImages /> },
        { path: 'contracts-by-us', element: <Contracts /> },
        // { path: 'safu-reports', element: <SafuReports /> },
        { path: 'portfolio', element: <Blog /> },
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
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
