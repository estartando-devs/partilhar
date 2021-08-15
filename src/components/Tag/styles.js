import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0 15px;
`;

export const Content = styled.div`
  width: 340px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding-left: 21px;
  border-radius: 7px;
  background-color: ${(props) => props.backgroundColor};
  @media (min-width: 768px) {
    width: 530px;
    height: 54px;
    font-size: 1.2rem;
  }
`;
export const Imagem = styled.img`
  width: 20px;
  height: 21px;
  @media (min-width: 768px) {
    width: 30px;
    height: 31px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
