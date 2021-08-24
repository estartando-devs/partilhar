import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-around;
  width: 100%;
  padding: 24px 0 0 18px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    padding: 35px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ContainerMenu = styled.div`
  width: 60px;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const ImagemLogo = styled.img`
  width: 185px;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    padding-bottom: 0;
    width: 240px;
  }
`;
export const Imagem = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: initial;
  }
`;
