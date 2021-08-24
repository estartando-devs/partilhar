import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0 40px;
`;

export const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
`;

export const Text = styled.p`
  font-weight: 900;
  color: ${({ theme }) => theme.palette.text.light.secondary};
  font-family: "Lato", sans-serif;
`;
