import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ theme }) => theme.colors.secondary};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background ${({ theme }) => theme.transitions.default};
  height: 64px;

  @media (max-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const HamburgerButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.mainText};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.brandColor}15;
    color: ${({ theme }) => theme.colors.brandColor};
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  img {
    width: 32px;
    height: 32px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

export const BrandName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 700;
  background: ${({ theme }) => theme.gradients.brand};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.brandColor : theme.colors.secondaryText};
  background: ${({ theme, $active }) =>
    $active ? `${theme.colors.brandColor}10` : "transparent"};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.brandColor};
    background: ${({ theme }) => theme.colors.brandColor}10;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  width: 120px;
`;


