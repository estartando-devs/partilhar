import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 360px;
`;

export const Title = styled.h2`
  padding: 10px 18px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.light.secondary};
`;
