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

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-top: 10px;
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 15px 0 0;
`;

const TitleMenu = styled.a`
  margin-left: 15px;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
`;

const ContainerInformation = styled.div`
  width: 100%;
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
  color: #ffffff;
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
