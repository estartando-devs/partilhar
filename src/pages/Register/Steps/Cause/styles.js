import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 335px;
  height: 100%;
  border-radius: 7px;
`;
export const Title = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 900;
`;
export const SubTitle = styled.h2`
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.palette.text.dark.primary};
  padding: 5px 0;
`;

export const ContentCause = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  width: 335px;
  height: 100%;
  border: 1px solid ${(props) => props.theme.palette.text.light.tertiary};
  box-sizing: border-box;
  padding: 13px 20px;
  border-radius: 7px;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.palette.text.dark.primary};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
`;

export const Radio = styled.label`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.bgColorBorder};
  background-color: ${(props) => props.bgColor};
  -webkit-box-shadow: 0 0 0 4px
    ${(props) => props.theme.palette.text.light.primary} inset;
`;

export const Input = styled.input`
  width: 26px;
  height: 26px;
  right: 33px;
  /* opacity: 0; */
  /* display: none; */
  position: absolute;
`;
export const LabelText = styled.label`
  margin: 10px 0 2px;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.palette.text.dark.primary};
`;
export const InputText = styled.textarea`
  border: 1px solid ${(props) => props.theme.palette.text.light.tertiary};
  width: 335px;
  height: 100px;
  border-radius: 7px;
  padding: 5px;
`;
