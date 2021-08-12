import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 248px;
  width: 100%;
  @media (min-width: 768px) {
    height: auto;
  }
`;

export const Titulo = styled.p`
  font-size: 18px;
  padding-top: 30px;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const ContainerCausa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 350px;
  height: 175px;
  gap: 10px;
  @media (min-width: 768px) {
    width: 591px;
    height: auto;
    justify-content: space-between;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 78px;
  width: 78px;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 7px;
  @media (min-width: 768px) {
    width: 132px;
    height: 125px;
    font-size: 1.23rem;
    cursor: pointer;
    :hover {
      filter: opacity(70%);
    }
  }
`;
export const Imagem = styled.img`
  @media (min-width: 768px) {
    height: 46px;
    width: 46px;
  }
`;

export const TextFilter = styled.p`
  font-weight: 500;
`;
export const TextStrong = styled.strong``;
