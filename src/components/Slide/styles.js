import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 25px;

  @media (min-width: 1130px) {
    margin-bottom: 0;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 360px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
export const Title = styled.h2`
  padding: 10px 18px 15px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.light.secondary};
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1130px) {
    font-size: 1.7rem;
  }
`;
export const Slide = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const ImageSlide = styled.img`
  height: 271px;
  width: 211px;
`;
export const ArrayPhotos = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
    width: 768px;
    height: auto;
  }
  @media (min-width: 1130px) {
    width: 1130px;
    gap: 20px;
    padding-bottom: 30px;
  }
`;

export const ContainerArray = styled.div``;

export const ImageArray = styled.img`
  width: 250px;
  @media (min-width: 1130px) {
    width: 360px;
  }
`;
