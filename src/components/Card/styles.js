import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;
export const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 14px;
  margin: 30px 0;
  @media (min-width: 768px) {
    width: 768px;
    justify-content: center;
    cursor: pointer;
    gap: 20px;
  }
`;

export const ContainerOngInfor = styled.div`
  width: 207px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media (min-width: 768px) {
    width: 100%;
    gap: 20px;
  }
`;

export const TextTitle = styled.h2`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.text.light.secondary};
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin: 0;
    padding-top: 10px;
  }
`;

export const TextContents = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: 8px;
  width: 206px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 480px;
    line-height: unset;
    justify-content: center;
    font-size: 1.2rem;
    text-align: justify;
    -webkit-line-clamp: 5;
  }
`;

export const TextLink = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.text.light.secondary};

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 0;
  }
`;

export const ContainerIcon = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    margin-top: -35px;
    margin-bottom: 20px;
    padding-left: 18px;
  }
`;
export const Icon = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 20px;
    cursor: pointer;
  }
`;
export const ImgCard = styled.img`
  width: 123px;
  height: 123px;
  border-radius: 8px;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;
