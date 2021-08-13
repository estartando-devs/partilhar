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
  margin: 30px 0;
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.light.secondary};
  padding-bottom: 10px;
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.primary};
`;
