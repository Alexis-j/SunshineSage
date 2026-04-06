import styled from "styled-components";

export const Container = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.card};
  background: rgba(255, 255, 255, 0.05);

  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  padding: 2rem 0;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
`;

export const Logo = styled.div`
  img {
    height: 60px;
    width: auto;
  }
`;
