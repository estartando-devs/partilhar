import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 335px;
  @media (min-width: 768px) {
    width: 740px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 900;
  font-family: "Lato", sans-serif;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    text-align: center;
    margin-top: 15px;
    font-size: 1.5rem;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
  width: 100%;
`;

export const Register = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
  margin-top: 15px;
  @media (min-width: 768px) {
    font-size: 1.4rem;
    gap: 4px;
    cursor: pointer;
  }
`;
export const TextRegister = styled.p`
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const IconRegister = styled.img`
  width: 14px;
  @media (min-width: 768px) {
    width: 17px;
  }
`;
