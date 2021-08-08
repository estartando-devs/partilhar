import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 114px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    height: 200px;
  }
`;
export const ContentHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 18px;
`;

export const ContainerMenu = styled.div`
  margin-right: 20px;
`;
export const ImagemLogo = styled.img`
  @media (min-width: 768px) {
    width: 340px;
  }
`;
export const Imagem = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;
