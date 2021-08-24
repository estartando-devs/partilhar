import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10px;
  width: 100%;
  max-width: 350px;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    min-height: 50vh;
    padding-top: 50px;
    max-width: 700px;
    width: 100%;
    height: unset;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-family: "Lato";
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  input {
    @media (min-width: 768px) {
      width: 100%;
    }
  }
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 25px;
    width: 45px;
    height: 45px;
  }
`;
