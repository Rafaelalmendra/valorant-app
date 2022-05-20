import Link from "next/link";

//components
import Links from "./Links";
import Credits from "./Credits";

//styles
import { Nav, Logo, GuideTitle } from "./style";

const Navbar = () => (
  <Nav>
    <Logo>
      <Link href="/">
        <a>
          <img src="/images/logo-red-typography.svg" alt="Logo Valorant" />
          <GuideTitle>
            {" "}
            <span></span> <p>guide</p> <span></span>{" "}
          </GuideTitle>
        </a>
      </Link>
    </Logo>
    <Links />
    <Credits />
  </Nav>
);

export default Navbar;
