import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 248px;
`;

export const Titulo = styled.p`
  font-size: 18px;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const ContainerCausa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 350px;
  height: 175px;
  gap: 10px;
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
`;
export const Imagem = styled.img``;

export const TextFilter = styled.p`
  font-weight: 500;
`;
export const TextStrong = styled.strong`
  font-weight: 800;
`;
