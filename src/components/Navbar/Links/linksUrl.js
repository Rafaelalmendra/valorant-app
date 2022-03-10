import { Home, Users, Map, Package, AlertCircle, } from 'react-feather';

export const linksUrl = [
  {
    id: 1,
    name: 'Home',
    icon: <Home />,
    url: '/',
  },
  {
    id: 2,
    name: 'Agentes',
    icon: <Users />,
    url: '/agentes',
  },
  {
    id: 3,
    name: 'Mapas',
    icon: <Map />,
    url: '/mapas',
  },
  {
    id: 4,
    name: 'Sprays',
    icon: <Package />,
    url: '/sprays',
  },
  {
    id: 5,
    name: 'Sobre',
    icon: <AlertCircle />,
    url: '/sobre',
  },
];