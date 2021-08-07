import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 19px;
  padding-top: 9px;
`;

const TitleStrong = styled.strong``;

const ContainerInfor = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextInfor = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-left: 14px;
`;

const ContainerTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export {
  Container,
  Title,
  TitleStrong,
  ContainerImg,
  ContainerInfor,
  ContainerTextInfo,
  TextInfor,
};
