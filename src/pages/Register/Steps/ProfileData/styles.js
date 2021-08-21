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
  @media (min-width: 768px) {
    width: 750px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 900;
  margin-top: 5px;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin: 10px 0;
  }
`;

export const Text = styled.p`
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    align-items: center;
    gap: 20px;
  }
`;

export const SubTitle = styled.h2`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 24px;
  @media (min-width: 768px) {
    margin: 15px 0;
    font-size: 1.5rem;
    text-align: center;
  }
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
    color: ${(props) => props.theme.palette.text.placeholder.secondary};
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
