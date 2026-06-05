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
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};

  grid-template-areas: "sidebar center rightpanel";
  grid-template-columns: 80px 1fr 280px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-areas: "center rightpanel";
    grid-template-columns: 1fr 280px;
  }

  @media (max-width: 768px) {
    grid-template-areas: "center";
    grid-template-columns: 1fr;
  }
`;

export const SidebarArea = styled.aside`
  grid-area: sidebar;
  position: sticky;
  top: 80px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CenterArea = styled.div`
  grid-area: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const RightPanelArea = styled.aside`
  grid-area: rightpanel;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  position: sticky;
  top: 80px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  @media (max-width: 768px) {
    position: static;
  }
`;
