import {
  BrandName,
  HamburgerButton,
  Logo,
  Nav,
  NavLeft,
  NavLink,
  NavLinks,
  NavRight,

} from "./styles";
import { Menu, Search, User, X } from "lucide-react";

import ThemeToggle from "../../components/ThemeToggle";
import { useState } from "react";

const Navbar = ({ isSidebarOpen, toggleSidebar, onSearch, isDark, toggleTheme }) => {

  return (
    <Nav>
      <NavLeft>
        <HamburgerButton onClick={toggleSidebar} aria-label="Toggle menu">
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </HamburgerButton>
        <Logo>
          <img src="/logo.png" alt="SunshineSage" />
          <BrandName>SunshineSage</BrandName>
        </Logo>
      </NavLeft>

      <NavLinks>
        <NavLink $active>Dashboard</NavLink>
        <NavLink>Analytics</NavLink>
        <NavLink>Favorites</NavLink>
        <NavLink>Settings</NavLink>
      </NavLinks>

      <NavRight>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </NavRight>
    </Nav>
  );
};

export default Navbar;
