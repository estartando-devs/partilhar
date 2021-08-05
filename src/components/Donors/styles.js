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
`;

const ContainerImg = styled.div`
  width: 347px;
  display: flex;
  justify-content: center;
  gap: 19px;
  padding-top: 9px;
`;

const TitleStrong = styled.strong`
  font-weight: 800;
`;

export { Container, Title, TitleStrong, ContainerImg };
