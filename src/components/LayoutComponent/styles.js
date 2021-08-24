import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: space-around;
`;

const Content = styled.div`
  flex: 1 0 auto;
`;

const FooterStyled = styled.div`
  flex-shrink: 0;
`;
export { Container, FooterStyled, Content };
