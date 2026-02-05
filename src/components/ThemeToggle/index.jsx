import { HiddenCheckbox, ToggleLabel, ToggleWrapper } from "./styles";

import MoonIcon from "../icons/MoonIconSvg";
import SunIcon from "../icons/SunIconSvg";

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <ToggleWrapper>
      <HiddenCheckbox
        id="theme-toggle"
        checked={isDark}
        onChange={toggleTheme}
      />
      <ToggleLabel htmlFor="theme-toggle" $checked={isDark}>
        <SunIcon $active={!isDark} />
        <MoonIcon $active={isDark} />
      </ToggleLabel>
    </ToggleWrapper>
  );
}
