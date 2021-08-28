import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.theme.palette.text.primary};
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const Input = styled.input`
  margin-top: 2px;
  outline: none;
  font-size: 14px;
  width: ${(props) => props.width || "340px"};
  height: ${(props) => props.height || "38px"};
  border-radius: 3px;
  border: 1px solid
    ${(props) =>
      props.borderColor || props.theme.palette.text.placeholder.primary};
  color: ${(props) => props.theme.palette.text.primary};
  padding-left: 10px;
  ::placeholder {
    color: ${(props) => props.theme.palette.text.placeholder.secondary}85;
    font-style: italic;
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 768px) {
    width: 750px;
    height: 42px;
    font-size: 1.2rem;
  }
`;
