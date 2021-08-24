import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  @media (min-width: 768px) {
    margin: 50px 0 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 328px;
  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.palette.secondary};
  font-weight: 900;
  font-size: 24px;
  @media (min-width: 768px) {
    font-size: 27px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;
  margin-top: 31px;
  @media (min-width: 768px) {
    input {
      width: 100%;
    }
  }
`;

export const ContainerRemember = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 14px;
`;

export const TextLink = styled(Link)`
  color: ${(props) => props.theme.palette.secondary};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  @media (min-width: 768px) {
    cursor: pointer;
    font-size: ${(props) => props.fontSize || "18px"};
  }
`;

export const ContainerButtom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  gap: 14px;
  width: 100%;
`;

export const Icon = styled.img``;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ContainerNew = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 5px;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    gap: 7px;
  }
`;
