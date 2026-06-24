import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  transition: background ${({ theme }) => theme.transitions.default};
`;

export const MainLayout = styled.div`
  display: flex;
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
  gap: 32px;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 16px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    padding: 0 12px 24px;
    gap: 16px;
  }
`;

export const CenterArea = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 680px;
  margin: 0 auto;
  padding-top: 32px;
  min-width: 0;

  @media (max-width: 1024px) {
    padding-top: 16px;
    max-width: none;
    gap: 16px;
  }

  @media (max-width: 768px) {
    padding-top: 12px;
    gap: 14px;
  }
`;

export const RightPanelArea = styled.aside`
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    width: 220px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
