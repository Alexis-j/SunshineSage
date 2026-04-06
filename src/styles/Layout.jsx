import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 80px 1fr 300px;
  gap: 20px;

  padding: 20px 40px; /* ⬅️ reduce espacios laterales */
  max-width: 1200px;
  margin: 0 auto; /* centra todo */
  align-items: stretch;
  background: ${({ theme }) => theme.card};



`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
`;
