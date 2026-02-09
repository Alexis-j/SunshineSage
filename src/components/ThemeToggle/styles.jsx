import styled from "styled-components";

export const ToggleWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 120px;  /* ancho máximo */
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const ToggleLabel = styled.label`
  display: block;
  width: 50%;
  aspect-ratio: 2.5;
  border-radius: 50px;
  background: ${({ $checked }) => ($checked ? "#242424" : "#ebebeb")};
  position: relative;
  cursor: pointer;
  box-shadow:
    inset 0px 5px 15px rgba(0,0,0,0.2),
    inset 0px -5px 15px rgba(255,255,255,0.2);
`;


export const Thumb = styled.div`
  position: absolute;
  top: 5%;
  left: ${({ $checked }) => ($checked ? "55%" : "5%")};
  width: 40%;
  height: 90%;
  border-radius: 50%;
  background: ${({ $checked }) =>
    $checked
      ? "linear-gradient(180deg,#777,#3a3a3a)"
      : "linear-gradient(180deg,#ffcc89,#d8860b)"};
  transition: left 0.3s, background 0.3s;
  z-index: 1;
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);  /* centra verticalmente */
  width: 24px;
  height: 24px;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ $active }) => ($active ? "#fff" : "rgba(255,255,255,0.4)")};
    transition: fill 0.3s;
  }

  ${({ $position }) =>
    $position === "left" &&
    `
      left: 5%;   /* siempre pegado al borde izquierdo */
  `}
  ${({ $position }) =>
    $position === "right" &&
    `
      right: 5%;  /* siempre pegado al borde derecho */
  `}
`;
