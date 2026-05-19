import {
  AvatarButton,
  BrandName,
  HamburgerButton,
  Logo,
  Nav,
  NavLeft,
  NavLink,
  NavLinks,
  NavRight,
  SearchBarCompact,
  SearchButton,
  SearchInput,
} from "./styles";
import { Menu, Search, User, X } from "lucide-react";

import ThemeToggle from "../../components/ThemeToggle";
import { useState } from "react";

const Navbar = ({ isSidebarOpen, toggleSidebar, onSearch, isDark, toggleTheme }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
    }
  };

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
        <SearchBarCompact>
          <SearchInput
            placeholder="Search city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <SearchButton onClick={handleSearch}>
            <Search size={16} />
          </SearchButton>
        </SearchBarCompact>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        <AvatarButton>
          <User size={20} />
        </AvatarButton>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
