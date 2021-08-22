import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;
export const ContentDonors = styled.div`
  @media (min-width: 768px) {
    width: 591px;
  }
`;

export const Title = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const ContainerDonor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 19px;
  padding-top: 18px;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const TitleStrong = styled.strong``;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImagemCard = styled.img`
  @media (min-width: 768px) {
    width: 277px;
    height: 169px;
  }
`;

export const ContainerTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
  }
`;
export const TextInfor = styled.p`
  font-weight: 400;
  font-size: 12px;
  padding-left: 14px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
