import styled from "styled-components";


export const Container = styled.div`
  padding: 20px 0;
  width: 100%;
  height: 100%;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: "Lato", sans-serif;
  font-weight: 400;
`;
export const Imagem = styled.img`
  width: 211px;
  height: 271px;
`;
