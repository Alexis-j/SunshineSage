import styled from "styled-components";

export const Container = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform ${({ theme }) => theme.transitions.default},
              background ${({ theme }) => theme.transitions.default};

  @media (max-width: 1024px) {
    position: fixed;
    left: 0;
    top: 64px;
    bottom: 0;
    z-index: 95;
    border-radius: 0 ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0;
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
    border-left: none;
    width: 80px;
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
    $active ? theme.colors.brandColor : theme.colors.iconInactive};
  background: ${({ theme, $active }) =>
    $active ? `${theme.colors.brandColor}15` : "transparent"};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.brandColor};
    background: ${({ theme }) => theme.colors.brandColor}10;
    transform: scale(1.1);
  }
`;
