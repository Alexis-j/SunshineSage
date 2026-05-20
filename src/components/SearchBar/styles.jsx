import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => `0 ${theme.spacing.sm}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.fast};
  width: 100%;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.brandColor};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


export const SearchInput = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.mainText};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.brandColor};
  }
`;
