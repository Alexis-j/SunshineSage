import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ScrollContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 4px 0;

  &::-webkit-scrollbar {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondaryText}44;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    margin: 0 -12px;
    padding: 4px 12px;
  }
`;

export const HourCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 10px;
  min-width: 64px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme, $active }) =>
    $active ? `${theme.colors.brandColor}10` : theme.colors.secondary};
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? `${theme.colors.brandColor}22` : theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.fast};
  scroll-snap-align: start;
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.colors.brandColor}22;
    background: ${({ theme }) => `${theme.colors.brandColor}06`};
  }

  img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    min-width: 56px;
    padding: 10px 8px;
    gap: 3px;

    img {
      width: 22px;
      height: 22px;
    }
  }
`;

export const HourTime = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
  font-weight: 500;
`;

export const HourTemp = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const RainChance = styled.span`
  font-size: 9px;
  font-weight: 600;
  color: ${({ $chance, theme }) =>
    $chance > 50 ? theme.colors.error : $chance > 20 ? theme.colors.warning : theme.colors.secondaryText};
  display: flex;
  align-items: center;
  gap: 1px;
`;
