import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;


`;

export const SearchInput = styled.input`
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.mainText};
  box-shadow: ${({ theme }) => theme.shadows.card};
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);




  width:350px;
  font-size: 1.5rem;

  background: ${({ theme }) => theme.colors.secondary};

  transition: width 0.3s ease, box-shadow 0.2s ease;

  &:focus {
    width: 350px;
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  }
`;


export const SearchIcon = styled.span`
  position: absolute;
  right: 10px;
  color: ${({ theme }) => theme.colors.text};
`;


export const LocationButton = styled.button`
  margin-left: 10px;
  cursor: pointer;
`;
