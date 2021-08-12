import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 375px;
`;

export const Title = styled.h2`
  padding: 10px 18px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
`;
