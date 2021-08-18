import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 340px;
  height: 100%;
  gap: 12px;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 900;
`;

export const Text = styled.p``;

export const SubTitle = styled.h2`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-weight: 24px;
`;
export const Label = styled.label`
  color: ${(props) => props.theme.palette.text.dark.tertiary};
`;
export const Input = styled.input`
  margin-top: 3px;
  width: 340px;
  height: 38px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.palette.text.placeholder.secondary};
  padding-left: 10px;
  ::placeholder {
    color: ${(props) => props.theme.palette.text.placeholder.secondary};
    font-style: italic;
  }
`;
