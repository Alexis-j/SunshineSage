import styled from "styled-components";

export const ToggleWrapper = styled.div`
  position: relative;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 0;
  height: 0;
  visibility: hidden;
`;

export const ToggleLabel = styled.label`
  width: 500px;
  height: 200px;
  position: relative;
  display: block;
  background: ${({ $checked }) => ($checked ? "#242424" : "#ebebeb")};
  border-radius: 200px;
  cursor: pointer;
  transition: 0.3s;

  box-shadow:
    inset 0px 5px 15px rgba(0,0,0,0.4),
    inset 0px -5px 15px rgba(255,255,255,0.4);

  &::after {
    content: "";
    width: 180px;
    height: 180px;
    position: absolute;
    top: 10px;
    left: ${({ $checked }) => ($checked ? "490px" : "10px")};
    transform: ${({ $checked }) =>
      $checked ? "translateX(-100%)" : "none"};
    background: ${({ $checked }) =>
      $checked
        ? "linear-gradient(180deg,#777,#3a3a3a)"
        : "linear-gradient(180deg,#ffcc89,#d8860b)"};
    border-radius: 180px;
    transition: 0.3s;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  }

  &:active::after {
    width: 260px;
  }
`;
