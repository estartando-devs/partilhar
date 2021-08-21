import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary};
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    min-width: 768px;
    max-width: 1200px;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-top: 14px;
  @media (min-width: 768px) {
    padding-right: 0;
  }
`;

export const ContainerLogo = styled.img`
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: auto;
  @media (min-width: 768px) {
    width: 204px;
    padding-left: 26px;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  @media (min-width: 768px) {
    padding-right: 5px;
  }
`;

export const TitleMenu = styled(Link)`
  margin-left: 15px;
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.light.primary};
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 5px;
    :hover {
      background-color: ${({ theme }) =>
        theme.palette.text.placeholder.secondary}60;
    }
  }
`;

export const ContainerInformation = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 8px 0;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding-right: 10px;
  @media (min-width: 768px) {
    gap: 26px;
    padding-right: 20px;
    cursor: pointer;
  }
`;

export const TitleInformation = styled.p`
  color: ${({ theme }) => theme.palette.text.light.primary};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  padding-left: 16px;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const BoxImg = styled.img`
  @media (min-width: 768px) {
    height: 25px;
    width: 25px;
  }
`;
