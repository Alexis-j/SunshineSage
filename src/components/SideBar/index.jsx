import { BarChart3, Heart, Home, Settings } from "lucide-react";
import { BottomNav, BottomSection, Container, Divider, IconItem, Icons, Logo } from "./styles";

const mainNav = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
  { id: "favorites", icon: Heart, label: "Favorites" },
];

const Sidebar = ({ isOpen, activeView, onNavigate }) => {
  return (
    <Container $isOpen={isOpen}>
      <Logo>
        <img src="/logo.png" alt="logo" />
      </Logo>

      <Icons>
        {mainNav.map((item) => (
          <IconItem
            key={item.id}
            $active={activeView === item.id}
            title={item.label}
            onClick={() => onNavigate(item.id)}
          >
            <item.icon size={22} />
          </IconItem>
        ))}
      </Icons>

      <BottomSection>
        <Divider />
        <BottomNav>
          <IconItem
            $active={activeView === "settings"}
            title="Settings"
            onClick={() => onNavigate("settings")}
          >
            <Settings size={22} />
          </IconItem>
        </BottomNav>
      </BottomSection>
    </Container>
  );
};

export default Sidebar;
