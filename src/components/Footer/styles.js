import styled from "styled-components";

const ContainerFooter = styled.footer`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 92px;
  background: #5a7770;
`;

const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleMenu = styled.a`
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 129px;
  height: 46px;
  margin: 10px 0 0 16px;
`;

const ContainerInformation = styled.div`
  display: flex;
  align-items: center;
`;

const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  padding: 12px 0;
`;

const TitleInformation = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
`;

const LogoImg = styled.img`
  width: 43.29px;
  height: 46.09px;
`;

export {
  ContainerFooter,
  ContainerLogo,
  ContainerInformation,
  ContainerImg,
  ContainerMenu,
  TitleInformation,
  TitleMenu,
  LogoImg,
};
