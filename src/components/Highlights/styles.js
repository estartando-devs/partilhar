import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  margin-top: 30px;
  box-sizing: border-box;
  margin-bottom: 30px;
`;
export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding-top: 5px;
`;
export const Title = styled.p`
  font-size: 18px;
  margin-bottom: 19px;
`;
export const TextStrong = styled.strong``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Img = styled.img`
  width: 118px;
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
`;
export const ImgSubtitle = styled.img`
  background-image: url ${(props) => props.image};
`;

export const Text = styled.p`
  font-size: 12px;
`;
