import { HeaderContainer, LocationButton, Logo, SearchIcon, SearchInput, SearchWrapper } from "./styles";

import ThemeToggleButton from "../ThemeToggle";
import { useState } from "react";

const Header = ({ isDark, toggleTheme, onSearch, onUseLocation }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    onSearch(query.trim());
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src="/logo.png" alt="logo" />
      </Logo>

      <SearchWrapper>
        <SearchInput
          placeholder="Busca ciudad..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <SearchIcon onClick={handleSearch} />
      </SearchWrapper>

      <LocationButton onClick={onUseLocation}>
        📍
      </LocationButton>

      <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
    </HeaderContainer>
  );
};

export default Header;
