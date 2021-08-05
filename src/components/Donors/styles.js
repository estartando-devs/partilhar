import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary};
`;

const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 9px 0 30px;
`;

const TitleStrong = styled.strong`
  font-weight: 800;
`;

export { Container, Title, TitleStrong, ContainerImg };
