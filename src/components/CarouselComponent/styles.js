import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 37px;
  @media (min-width: 768px) {
    margin-top: 47px;
  }
`;

export const Content = styled.div`
  width: 300px;
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin-top: 16px;
  gap: 10px;
`;

export const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active
      ? props.theme.palette.text.dark.tertiary
      : props.theme.palette.step.secondary};
  border: 3px solid ${(props) => props.theme.palette.step.secondary};
`;
