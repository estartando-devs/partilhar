import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  width: 341px;
  height: 100%;
  padding: 30px 0 20px;
  @media (min-width: 768px) {
    width: 768px;
    padding: 50px 0;
  }
`;
export const Title = styled.h2`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 900;
  color: ${({ theme }) => theme.palette.text.light.secondary};
  padding-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 1.6rem;
    padding-bottom: 30px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
    font-size: 1.3rem;
    padding: 0 4px;
  }
`;
