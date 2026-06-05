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
import { Menu, X } from "lucide-react";

import ThemeToggle from "../../components/ThemeToggle";

const navItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "analytics", label: "Analytics" },
  { id: "favorites", label: "Favorites" },
  { id: "settings", label: "Settings" },
];

const Navbar = ({ isSidebarOpen, toggleSidebar, isDark, toggleTheme, activeView, onNavigate }) => {
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
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            $active={activeView === item.id}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </NavLink>
        ))}
      </NavLinks>

      <NavRight>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </NavRight>
    </Nav>
  );
};

export default Navbar;
