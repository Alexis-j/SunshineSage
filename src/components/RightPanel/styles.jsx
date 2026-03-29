import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  margin: 3rem auto;
  padding: 20px;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadows.card};

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
