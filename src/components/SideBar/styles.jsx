import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: 20px;
  padding: 20px 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icons = styled.div`
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;
