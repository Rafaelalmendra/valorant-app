import { useState } from "react";

//components
import Logo from "./Logo";
import Links from "./Links";

//styles
import { Nav } from "./style";

//icons
import { Menu } from "react-feather";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <Logo />
        <Menu onClick={() => setIsOpen(true)} />
      </Nav>

      {isOpen ? <Links onClick={() => setIsOpen(false)} /> : null}
    </>
  );
};

export default NavbarMobile;
