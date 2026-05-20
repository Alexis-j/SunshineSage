import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.lg} 0 0;

  width: 100%;
  align-items: flex-start;
`;

export const Greeting = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 700;
  background: ${({ theme }) => theme.gradients.brand};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;


  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const LocationRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Location = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const Phrase = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondaryText};
  font-style: italic;
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.secondaryText};
`;
