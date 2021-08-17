import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 25px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 360px;
  height: auto;
  padding: 21px;
  background-color: ${(props) => props.bgColor};
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1130px) {
    width: 1130px;
  }
`;
export const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1130px) {
    font-size: 1.6rem;
  }
`;
