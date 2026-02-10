import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 80px;
    width: auto;
  }
`;


export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  outline: none;

  width: 250px;
  font-size: 1rem;

  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);

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
