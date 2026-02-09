import { HiddenCheckbox, Icon, Thumb, ToggleLabel, ToggleWrapper } from "./styles";

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
        <Icon $position="left" $active={!isDark}>
          <SunIcon />
        </Icon>
        <Icon $position="right" $active={isDark}>
          <MoonIcon />
        </Icon>
        <Thumb $checked={isDark} />
      </ToggleLabel>
    </ToggleWrapper>
  );
}
