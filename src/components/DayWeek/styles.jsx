import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  padding: 20px;
`;

export const Hours = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

export const HourCard = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 15px;
  padding: 15px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  min-width: 70px;

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
