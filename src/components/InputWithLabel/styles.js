import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Label = styled.label`
  font-size: 16px;
  color: ${(props) => props.theme.palette.text.dark.primary};
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const Input = styled.input`
  margin-top: 2px;
  font-size: 14px;
  width: 340px;
  height: 38px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.palette.text.placeholder.primary};
  color: ${(props) => props.theme.palette.text.tertiary};
  padding-left: 10px;
  ::placeholder {
    color: ${(props) => props.theme.palette.text.placeholder.secondary}85;
    font-style: italic;
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 768px) {
    width: 740px;
    height: 42px;
  }
`;
