import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  margin: 3rem auto;

  `;

export const Icons = styled.div`
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;
