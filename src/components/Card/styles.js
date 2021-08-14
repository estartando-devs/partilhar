import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 14px;
  margin: 30px 0;
`;

export const ContainerOngInfor = styled.div`
  width: 207px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const TextTitle = styled.h2`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.text.light.secondary};
  margin-bottom: 14px;
`;

export const TextContents = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: 8px;
  width: 206px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TextLink = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.text.light.secondary};
`;

export const ImgCard = styled.img`
  width: 123px;
  height: 123px;
  border-radius: 8px;
  object-fit: cover;
`;
