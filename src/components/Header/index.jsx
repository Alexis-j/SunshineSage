import { HeaderContainer, Logo, SearchIcon, SearchInput, SearchWrapper } from './styles'

import ThemeToggleButton from "../ThemeToggle"
import logo from "../../../public/logo.png"

const Header = ({ isDark, toggleTheme }) => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt='WheaterApp Logo'></img>
      </Logo>

      <SearchWrapper>
        <SearchInput type="text" />
        <SearchIcon />
      </SearchWrapper>

      <ThemeToggleButton
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
    </HeaderContainer>
  );
};


export default Header;
