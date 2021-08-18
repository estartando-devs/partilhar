import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
  font-family: "Lato", sans-serif;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

export const SubTitle = styled.h2`
  margin-top: 9px;
  font-size: 24px;
  font-family: "Lato", sans-serif;
`;
export const Input = styled.input`
  height: 45px;
  width: 335px;
  display: inline-block;
  border: 1px solid ${(props) => props.theme.palette.text.dark.tertiary};
  border-radius: 4px;
`;

export const Label = styled.label``;
