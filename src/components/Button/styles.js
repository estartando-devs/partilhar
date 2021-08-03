import styled from "styled-components";

const ButtonStyled = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.palette.primary};
  font-size: ${(props) => props.fontSize};
  /* color: ${(props) => props.color}; */
  color: ${(props) => props.theme.palette.text.light.primary};
  border-style: none;
  border-radius: 3px;
  font-weight: 700;
  margin-left: 7px;
`;

export { ButtonStyled };
