import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.secondary};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  min-width: 0;
`;

export const HoursWrapper = styled.div`
  background: ${({ theme }) => theme.gradients.hourCard};
  border-radius: 15px;
  padding: 16px;
`;

export const Hours = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const HourCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 14px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 64px;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.border};

  img {
    width: 30px;
    height: 30px;
  }

  p {
    font-size: 12px;
    opacity: 0.7;
  }

  span {
    font-weight: bold;
  }
`;

export const TomorrowCard = styled.div`
  background: ${({ theme }) => theme.gradients.hourCard};
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    width: 66px;
    height: 66px;
  }
`;

export const TomorrowInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TomorrowLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const TomorrowDesc = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 24px;
  min-width: 130px;
  background: ${({ theme }) => theme.gradients.hourCard};
  border-radius: 12px;
  padding: 14px 16px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const AstroItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AstroLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

export const AstroValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainText};
`;
