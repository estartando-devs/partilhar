import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 358px;
  margin-top: 30px;
`;
export const ContainerText = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 358px;
  margin-bottom: 20px;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.step.primary};
  border-style: none;
  color: ${(props) => props.theme.palette.text.tertiary};
`;
export const Img = styled.img``;

export const Text = styled.p`
  text-align: center;
  font-size: 10px;
  width: 60px;
  color: ${(props) => props.theme.palette.text.dark.tertiary};
`;
export const Hr = styled.hr`
  width: 50px;
  border: 1px solid ${(props) => props.theme.palette.step.primary};
`;

export const ContainerStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;
export const ContentStep = styled.div``;
