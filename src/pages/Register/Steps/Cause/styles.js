import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 335px;
  /* height: 100%; */
  border-radius: 7px;
  @media (min-width: 768px) {
    width: 760px;
  }
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 900;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin: 10px 0 0;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.palette.text.primary};
  padding: 5px 0 0;
  @media (min-width: 768px) {
    display: flex;
    font-size: 1.3rem;
    margin: 10px 0 0;
  }
`;

export const ContentCause = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  width: 335px;
  height: 100%;
  border: 1px solid ${(props) => props.theme.palette.text.light.tertiary};
  box-sizing: border-box;
  padding: 13px 20px;
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 760px;
    margin-bottom: 15px;
  }
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
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Input = styled.input`
  appearance: none;
  border: 2px solid ${(props) => props.bgColor};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  outline: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid ${(props) => props.bgColor};
    background-color: ${(props) => props.bgColor};
    opacity: 0;
    transition: all 200ms ease-in-out;
    -webkit-box-shadow: 0 0 0 4px
      ${(props) => props.theme.palette.text.light.primary} inset;
  }
  &:checked::before {
    opacity: 1;
  }
`;

export const Counter = styled.p`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: -5px;
  padding-right: 5px;
  font-size: 12px;
  color: ${(props) => props.theme.palette.text.placeholder.secondary};
  @media (min-width: 768px) {
    font-size: 14px;
    padding-right: 15px;
  }
`;
