import { Container, Icons, Logo } from "./styles";

import ThemeToggleButton from "../ThemeToggle";

const Sidebar = ({ isDark, toggleTheme }) => {
  return (
    <Container>
      <Logo>
        <img src="/logo.png" alt="logo" />
      </Logo>

      <Icons>
        {/* aquí podrían ir más iconos si quieres */}
      <Icons>
        <span>🏠</span>
        <span>📊</span>
        <span>📍</span>
        <span>📅</span>
        <span>⚙️</span>
      </Icons>
      </Icons>

      <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
    </Container>
  );
};

export default Sidebar;
