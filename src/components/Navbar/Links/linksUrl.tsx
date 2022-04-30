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
    url: "/Agentes",
  },
  {
    id: 3,
    name: "Mapas",
    icon: <Map />,
    url: "/Mapas",
  },
  {
    id: 4,
    name: "Arsenal",
    icon: <img src="/images/armor.svg" alt="Armor SVG icon" />,
    url: "/Arsenal",
  },
  {
    id: 5,
    name: "Sprays",
    icon: <Package />,
    url: "/Sprays",
  },
  {
    id: 6,
    name: "Sobre",
    icon: <AlertCircle />,
    url: "/Sobre",
  },
];
