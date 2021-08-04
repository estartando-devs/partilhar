import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerFooter = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 92px;
  background-color: ${({ theme }) => theme.palette.primary};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-top: 10px;
`;

const ContainerLogo = styled.img`
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: auto;
`;

const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 15px 0 0;
`;

const TitleMenu = styled(Link)`
  margin-left: 15px;
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.light.primary};
  text-decoration: none;
`;

const ContainerInformation = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    padding-right: 16.95px;
  }
`;

const TitleInformation = styled.p`
  color: ${({ theme }) => theme.palette.text.light.primary};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  padding-left: 16px;
`;

export {
  Container,
  ContainerFooter,
  ContainerLogo,
  ContainerInformation,
  ContainerImg,
  ContainerMenu,
  TitleInformation,
  TitleMenu,
};
