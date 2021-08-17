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
  gap: 25px;
  @media (min-width: 768px) {
    margin-top: 30px;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 900;
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
