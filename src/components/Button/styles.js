import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  border-style: none;
  border-radius: 3px;
`;
