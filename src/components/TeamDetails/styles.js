import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: ${({ theme }) => theme.palette.primary};
`;
export const Titles = styled.h2`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: ${({ theme }) => theme.palette.secondary};
  margin-bottom: 32px;
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme }) => theme.palette.text.tertiary};
  margin-top: 8px;
`;

export const TitleCompany = styled.h2`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: ${({ theme }) => theme.palette.tertiary.tertiary_10};
  margin: 20px 0;
  cursor: pointer;
`;

export const ContainerImg = styled.div`
  width: 550px;
  display: flex;
  justify-content: center;
  gap: 35px;
`;

export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 69px;
`;

export const PhotoImg = styled.img`
  cursor: pointer;
`;

export const TitleImg = styled.p`
  width: 60px;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-top: 5px;
  cursor: pointer;
`;
export const BoxSocialMedias = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 128px;
  cursor: pointer;
`;
