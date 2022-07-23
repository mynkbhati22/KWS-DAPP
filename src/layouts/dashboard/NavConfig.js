// @mui
import HomeIcon from '@mui/icons-material/Home';

// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },

  {
    title: 'portfolio',
    path: '/portfolio',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'partners',
    path: '/partners',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'services',
    path: '/services',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'create token',
    path: '/create-token',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'request audit',
    path: '/auditrequest',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'request KYC',
    path: '/',
    icon: getIcon('eva:file-text-fill'),
  },

  {
    title: 'contact us',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
