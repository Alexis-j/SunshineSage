import { BarChart3, Calendar, Home, MapPin, Settings } from "lucide-react";
import { Container, IconItem, Icons, Logo } from "./styles";

const navItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Analytics" },
  { icon: MapPin, label: "Locations" },
  { icon: Calendar, label: "Calendar" },
  { icon: Settings, label: "Settings" },
];

const Sidebar = ({ isDark, isOpen, closeSidebar }) => {
  return (
    <Container $isOpen={isOpen}>
      <Logo>
        <img src="/logo.png" alt="logo" />
      </Logo>

      <Icons>
        {navItems.map((item, i) => (
          <IconItem key={i} $active={item.active} title={item.label} onClick={closeSidebar}>
            <item.icon size={22} />
          </IconItem>
        ))}
      </Icons>

    </Container>
  );
};

export default Sidebar;


