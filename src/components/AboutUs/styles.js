import styled from "styled-components";
import { backgroundAbout } from "../../assets/img";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0 49px;
  @media (max-width: 360px) {
    padding: 25px 0 49px;
  }
`;

export const Content = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Box = styled.div`
  padding: 30px 0px 50px 0px;
  background-image: url(${backgroundAbout});
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
  gap: 30px;
`;

export const Image = styled.img`
  @media (max-width: 360px) {
    width: 305px;
    height: 223px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: ${({ theme }) => theme.palette.tertiary.tertiary_9};
`;

export const TextContent = styled.div`
  max-width: 550px;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.text.light.primary};
`;

export const QuoteText = styled(Title)`
  max-width: 280px;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.text.dark.secondary};
`;
