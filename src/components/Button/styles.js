import styled from "styled-components";

const ButtonStyled = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.palette.primary};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background-image: ${(props) => props.image};
  border-style: none;
  border-radius: 3px;
  font-weight: 700;
  margin-left: 7px;
  @media (min-width: 768px) {
    cursor: pointer;
  }
`;

export { ButtonStyled };
