import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

// custom css
import "../styles/css/components/Menu.css";

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" id="topMenu">
        <NavbarBrand href="/">raw dog!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/meals">Meals</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#reviews">Reviews</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#signup">Start Now!</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
