import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  transition: background ${({ theme }) => theme.transitions.default};
`;

export const MainContent = styled.div`
  display: grid;
  flex: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.lg};

  grid-template-areas: "sidebar center rightpanel";
  grid-template-columns: 80px 1fr 300px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-areas: "center rightpanel";
    grid-template-columns: 1fr 280px;
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 768px) {
    grid-template-areas: "center";
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const SidebarArea = styled.aside`
  grid-area: sidebar;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CenterArea = styled.div`
  grid-area: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin:0 auto;
`;

export const RightPanelArea = styled.aside`
  grid-area: rightpanel;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  position: sticky;
  top: 80px;

  @media (max-width: 768px) {
    position: static;
  }
`;
