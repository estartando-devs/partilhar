import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-top: 45px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 358px;

  @media (min-width: 768px) {
    width: 542px;
  }
`;
export const ContainerText = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 358px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 510px;
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border-style: none;
  color: ${(props) => props.theme.palette.text.tertiary};
  @media (min-width: 768px) {
    height: 43px;
    width: 43px;
  }
`;

export const Img = styled.img`
  @media (min-width: 768px) {
    width: 24px;
    height: 25px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 12px;
  width: 60px;
  color: ${(props) => props.theme.palette.text.dark.tertiary};
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;
export const Hr = styled.hr`
  width: 45px;
  border: 1px solid ${(props) => props.bgColor};
  @media (min-width: 768px) {
    width: 70px;
  }
`;

export const ContainerStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;
export const Button = styled.button`
  background-color: ${(props) => props.bgColor || props.theme.palette.primary};
  color: ${(props) => props.theme.palette.text.primary};
  width: 229px;
  height: 38px;
  border-style: none;
  border-radius: 3px;
  font-weight: 700;
  margin-left: 7px;
  font-size: 14px;
  @media (min-width: 768px) {
    cursor: pointer;
    width: 315px;
    height: 52px;
    font-size: 1.1rem;
    color: ${(props) => props.theme.palette.text.light.primary};
  }
`;
