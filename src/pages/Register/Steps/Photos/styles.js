import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Lato";
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Container = styled.div`
  padding-top: 10px;
  width: 100%;
  max-width: 350px;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    padding-top: 50px;
    max-width: 700px;
    width: 100%;
    height: unset;
    align-items: center;
  }
`;
