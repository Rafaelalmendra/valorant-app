import { Home, Users, Map, Package, AlertCircle } from "react-feather";

interface linksUrlProps {
  name: string;
  id: number;
  icon: any;
  url: string;
}

export const linksUrl: linksUrlProps[] = [
  {
    id: 1,
    name: "Home",
    icon: <Home />,
    url: "/",
  },
  {
    id: 2,
    name: "Agentes",
    icon: <Users />,
    url: "/agentes",
  },
  {
    id: 3,
    name: "Mapas",
    icon: <Map />,
    url: "/mapas",
  },
  {
    id: 4,
    name: "Arsenal",
    icon: <img src="/images/armor.svg" alt="Armor SVG icon" />,
    url: "/arsenal",
  },
  {
    id: 5,
    name: "Sprays",
    icon: <Package />,
    url: "/sprays",
  },
  {
    id: 6,
    name: "Sobre",
    icon: <AlertCircle />,
    url: "/sobre",
  },
];
