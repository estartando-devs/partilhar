import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Checkbox = styled.input`
  appearance: none;
  position: relative;
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 1px solid ${(props) => props.theme.palette.text.secondary};
  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border: 1px solid ${(props) => props.theme.palette.text.secondary};
  }

  &:checked::before {
    background: url(${(props) => props.bgImage}) no-repeat;
    background-position: center;
  }
`;

export const Label = styled.label`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
