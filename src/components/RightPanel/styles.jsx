import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  margin: 0 auto;
  padding: 20px;

  box-shadow: ${({ theme }) => theme.shadows.card};
  background: rgba(255, 255, 255, 0.05);

  width: 280px;
  height: 100%;

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 15px;
  padding: 15px;
  margin: 3rem auto;


  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100px;

  p {
    font-size: 14px;
    opacity: 0.7;
  }

  h2 {
    margin-top: 10px;
  }
`;
