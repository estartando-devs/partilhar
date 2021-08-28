import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const TextArea = styled.textarea`
  border: 1px solid
    ${(props) => props.borderColor || props.theme.palette.text.light.tertiary};
  width: ${(props) => props.width || "335px"};
  font-family: "Roboto", sans-serif;
  height: ${(props) => props.height || "100px"};
  border-radius: 5px;
  font-size: 16px;
  padding: 5px;
  resize: none;
  outline: none;
  ::placeholder {
    color: ${(props) => props.theme.palette.text.placeholder.secondary}80;
  }
  @media (min-width: 768px) {
    width: ${(props) => props.widthMedia || "760px"};
    height: 126px;
    font-size: 1.25rem;
  }
`;

export const Label = styled.label`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.theme.palette.text.primary};
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
