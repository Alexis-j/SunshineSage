import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 25px;
  width: 800px;
  margin: 3rem auto;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  color: white;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 3rem;
    margin: 0;
  }
`;

export const Location = styled.div`
  background: linear-gradient(90deg, purple, violet);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  width: fit-content;
  font-size: 0.9rem;
`;

export const DateText = styled.p`
  opacity: 0.7;
`;

export const Temp = styled.h2`
  font-size: 4rem;
  margin: 1rem 0 0;
`;

export const Range = styled.p`
  opacity: 0.7;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Toggle = styled.button`
  border-radius: 20px;
  padding: 0.3rem 1rem;
  border: none;
  cursor: pointer;
`;

export const Condition = styled.h3`
  font-size: 1.5rem;
`;

export const FeelsLike = styled.p`
  opacity: 0.7;
`;
