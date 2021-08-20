import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0 49px;
  /* position: relative; */
  @media (max-width: 360px) {
    padding: 25px 0 49px;
  }
`;

export const Content = styled.div`
  width: 797px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* position: relative; */
  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const BoxContent = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  margin-top: -132px;

  @media (max-width: 360px) {
    width: 305px;
    height: 223px;
    margin-top: -96px;
  }
`;

export const BoxBackgroundOne = styled.div`
  height: 372px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary};
`;

export const BoxBackgroundSecond = styled.div`
  height: 372px;
  display: flex;
  justify-content: center;
  margin-top: -132px;
  background-color: ${({ theme }) => theme.palette.tertiary.tertiary_9};
  @media (max-width: 360px) {
    height: 288px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: ${({ theme }) => theme.palette.tertiary.tertiary_9};
  padding-top: 28px;
`;

export const TextContent = styled.div`
  width: 598px;
  padding: 29px 0;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.text.light.primary};

  @media (max-width: 360px) {
    width: 298px;
  }
`;

export const QuoteText = styled.div`
  width: 285px;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.text.dark.secondary};
  margin-top: 200px;
  @media (max-width: 360px) {
    margin-top: 180px;
  }
`;
