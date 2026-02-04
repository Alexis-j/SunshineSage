import "./styles.css";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import PropTypes from "prop-types";

function ThemeToggleButton({ toggleTheme, isDark }) {
  return (
    <div
      className={`toggle ${isDark ? "dark" : "light"}`}
      onClick={toggleTheme}
      role="button"
      aria-label="Cambiar tema"
    >
      <div className="thumb">{isDark ? <DarkModeIcon /> : <LightModeIcon />}</div>
    </div>
  );
}

ThemeToggleButton.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
};

export default ThemeToggleButton;
