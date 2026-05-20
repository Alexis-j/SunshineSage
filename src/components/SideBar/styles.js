import styled from "styled-components";

export const Container = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform ${({ theme }) => theme.transitions.default},
              background ${({ theme }) => theme.transitions.default};

  width: 80px;
  z-index: 95;

  /* 🖥️ Desktop: SIEMPRE visible */
  transform: translateX(0);

  /* 📱 Mobile/tablet: drawer */
  @media (max-width: 1024px) {
    position: fixed;
    left: 0;
    top: 64px;
    bottom: 0;

    border-left: none;
    border-radius: 0 ${({ theme }) => theme.borderRadius.lg}
      ${({ theme }) => theme.borderRadius.lg} 0;

    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  }
`;

export const Overlay = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    inset: 64px 0 0 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 90;
  }
`;

export const Logo = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
`;

export const IconItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.brandColor : theme.colors.secondaryText};
  background: ${({ theme, $active }) =>
    $active ? `${theme.colors.brandColor}10` : "transparent"};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.brandColor};
    background: ${({ theme }) => theme.colors.brandColor}10;
    transform: scale(1.1);
  }
`;
