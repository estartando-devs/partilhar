import styled from "styled-components";

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: 3px;
`;
