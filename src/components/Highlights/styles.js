import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  margin-top: 30px;
  box-sizing: border-box;
  margin-bottom: 30px;
  width: 100%;

  @media (min-width: 768px) {
    height: auto;
  }
`;
export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding-top: 5px;
  @media (min-width: 768px) {
    gap: 18px;
    width: 591px;
    height: 100%;
  }
`;
export const Title = styled.p`
  font-size: 18px;
  margin-bottom: 19px;
  @media (min-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0;
  }
`;
export const TextStrong = styled.strong``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 100%;
  @media (min-width: 768px) {
    gap: 0;
    justify-content: space-between;
    cursor: pointer;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    :hover {
      filter: opacity(70%);
    }
  }
`;
export const Img = styled.img`
  width: 118px;

  @media (min-width: 768px) {
    width: 100%;
    height: 280px;
  }
`;

export const CardSubtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  background-color: ${(props) => props.theme.palette.text.secondary}96;
  color: ${(props) => props.theme.palette.text.light.primary};
  gap: 4px;
  margin-top: -32px;

  @media (min-width: 768px) {
    height: 50px;
    margin-top: -50px;
  }
`;
export const ImgSubtitle = styled.img`
  background-image: url ${(props) => props.image};
  @media (min-width: 768px) {
    width: 28px;
    height: 29px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
