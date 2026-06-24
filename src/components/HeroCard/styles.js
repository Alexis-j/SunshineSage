import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 32px;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all ${({ theme }) => theme.transitions.default};
  animation: ${slideUp} 0.6s ease forwards;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $gradient }) => $gradient || "none"};
    opacity: 0.08;
    transition: opacity 0.8s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ $accent, theme }) => $accent || theme.gradients.brand};
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const LocationGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const CityName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainText};
  letter-spacing: -0.3px;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const DateText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondaryText};

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const UnitToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 11px;
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  z-index: 1;
  flex-shrink: 0;

  &:hover {
    border-color: ${({ $accent }) => $accent || "#7C3AED"}44;
    box-shadow: 0 0 12px ${({ $accent }) => $accent || "#7C3AED"}22;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const UnitOption = styled.span`
  color: ${({ $active, theme }) =>
    $active ? theme.colors.mainText : theme.colors.secondaryText};
  transition: color ${({ theme }) => theme.transitions.fast};
`;

export const MainRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 14px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 10px;
  }
`;

export const TempGroup = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

export const TempValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-weight: 200;
  line-height: 1;
  color: ${({ theme }) => theme.colors.mainText};
  letter-spacing: -4px;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: -1px;
  }
`;

export const TempUnit = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-left: 4px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const WeatherIconWrapper = styled.div`
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ $accent, theme }) => $accent ? `${$accent}15` : theme.colors.primary};
  transition: background 0.5s ease;

  img {
    width: 68px;
    height: 68px;
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;

    img {
      width: 48px;
      height: 48px;
    }
  }
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const Condition = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.mainText};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const Meta = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  align-items: center;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const MetaLabel = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

export const MetaValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainText};

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
