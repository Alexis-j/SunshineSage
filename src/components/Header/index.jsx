import { HeaderContainer, Logo, SearchIcon, SearchInput, SearchWrapper } from './styles'

import ThemeToggleButton from "../ThemeToggle"
import logo from "../../../public/logo.png"
import { useState } from 'react';

const Header = ({ isDark, toggleTheme, onSearch }) => {

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
  if (!query.trim()) return;
  console.log("Buscando:", query); // 👈 añade esto
  onSearch(query);
};

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt='WheaterApp Logo'></img>
      </Logo>

      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Busca una ciudad..."
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <SearchIcon onClick={handleSearch} />
      </SearchWrapper>

      <ThemeToggleButton
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
    </HeaderContainer>
  );
};


export default Header;
