import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 25px;
  width: 100vh;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  color: ${({ theme }) => theme.colors.mainText};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const CityCountry = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.mainText};
`;

export const DateText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.mainText};
`;

export const Temp = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.mainText};
`;

export const TempRange = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.mainText};
  opacity: 0.7;
`;

export const WeatherIcon = styled.img`
  width: 6rem;
  height: 6rem;
`;

export const Condition = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const FeelsLike = styled.p`
  color: ${({ theme }) => theme.colors.mainText};
  opacity: 0.7;
`;

export const ToggleWrapper = styled.div`
  width: 65px;
  height: 30px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.inset};
`;

export const Thumb = styled.div`
  position: absolute;
  top: 5%;
  left: ${({ $checked }) => ($checked ? "60%" : "0%")};
  width: 40%;
  height: 90%;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.thumb};
  transition: left 0.3s, background 0.3s;
  z-index: 1;
`;

export const Label = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryText};
  pointer-events: none;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  z-index: 2;
`;
