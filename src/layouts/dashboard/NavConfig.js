import { AiOutlineAudit } from 'react-icons/ai';
// @mui
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TokenIcon from '@mui/icons-material/Token';
import GppGoodIcon from '@mui/icons-material/GppGood';

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
    title: 'services',
    path: '/services',
    icon: <ManageAccountsRoundedIcon />,
  },

  {
    title: 'partners',
    path: '/partners',
    icon: <HandshakeIcon />,
  },
  {
    title: 'team',
    path: '/our-team',
    icon: <GroupAddIcon />,
  },
  {
    title: 'contracts',
    path: '/contracts-by-us',
    icon: getIcon('eva:file-text-fill'),
  },
  // {
  //   title: 'safu report',
  //   path: '/safu-reports',
  //   icon: getIcon('eva:file-text-fill'),
  // },

  {
    title: 'create token',
    path: '/coming-soon',
    icon: <TokenIcon />,
  },

  {
    title: 'request audit',
    path: '/coming-soon',
    icon: <AiOutlineAudit size={22} />,
  },
  {
    title: 'request KYC',
    path: '/coming-soon',
    icon: <GppGoodIcon />,
  },

  {
    title: 'contact us',
    path: '/contact-us',
    icon: getIcon('eva:person-add-fill'),
  },
];

export default navConfig;
