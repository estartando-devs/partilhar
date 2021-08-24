import styled from "styled-components";

const ButtonStyled = styled.button`
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.minWidth || "90px"};
  max-width: ${(props) => props.widthMax || "135px"};
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.palette.primary};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background-image: ${(props) => props.image};
  border-style: none;
  border: ${(props) => props.border};
  border-radius: 3px;
  font-weight: 700;
  margin-left: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  @media (min-width: 768px) {
    cursor: pointer;
    font-size: 1.1rem;
    width: 100%;
    max-width: ${(props) => props.widthMaxMedia};
    height: ${(props) => props.heightMedia};
    font-weight: ${(props) => props.weightMedia || "700"};
  }
`;

export { ButtonStyled };
