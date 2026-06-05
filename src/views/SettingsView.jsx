import styled from "styled-components";
import ThemeToggle from "../components/ThemeToggle";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.mainText};
`;

const SettingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mainText};
`;

const ToggleSwitch = styled.button`
  width: 52px;
  height: 26px;
  border-radius: 13px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.brandColor : theme.colors.border};
  position: relative;
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.fast};

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: ${({ $active }) => ($active ? "28px" : "3px")};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    transition: left ${({ theme }) => theme.transitions.fast};
  }
`;

const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondaryText};
  line-height: 1.6;
`;

const SettingsView = ({ isDark, toggleTheme }) => {
  const [unit, setUnit] = useLocalStorage("unit", "C");

  return (
    <Container>
      <Card>
        <Title>Appearance</Title>
        <SettingRow>
          <SettingLabel>Dark Mode</SettingLabel>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </SettingRow>
      </Card>

      <Card>
        <Title>Units</Title>
        <SettingRow>
          <SettingLabel>Temperature</SettingLabel>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: unit === "C" ? 700 : 400,
                color: "inherit",
              }}
            >
              °C
            </span>
            <ToggleSwitch
              $active={unit === "F"}
              onClick={() => setUnit(unit === "C" ? "F" : "C")}
            />
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: unit === "F" ? 700 : 400,
                color: "inherit",
              }}
            >
              °F
            </span>
          </div>
        </SettingRow>
      </Card>

      <Card>
        <Title>About</Title>
        <AboutText>
          SunshineSage v0.0.0
          <br />
          Weather data powered by WeatherAPI.com
          <br />
          Built with React + Vite
        </AboutText>
      </Card>
    </Container>
  );
};

export default SettingsView;
