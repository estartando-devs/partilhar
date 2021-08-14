import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 768px) {
    margin-top: 10px;
  }
`;
export const ContainerTitle = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;
export const ContainerIcon = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 20px;
    width: 100%;
    margin-top: -45px;
  }
`;
export const Icon = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 22px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.light.secondary};
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
export const Img = styled.img`
  height: 150px;
  width: 360px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 342px;
    width: 768px;
  }
`;
