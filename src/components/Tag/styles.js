import styled from "styled-components";

export const Container = styled.div`
  width: 340px;
  height: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  padding-left: 21px;
  border-radius: 7px;
  background-color: ${(props) => props.backgroundColor};
`;
export const Imagem = styled.img``;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.primary};
`;
