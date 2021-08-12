import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerOngInfor = styled.div`
  width: 207px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const TextTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.text.primary};
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

export const TextLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const ImgCard = styled.img``;

export const ContainerCardInfor = styled.div`
  width: 342px;
  display: flex;
  justify-content: center;
  gap: 14px;
  margin: 30px 0;
`;
