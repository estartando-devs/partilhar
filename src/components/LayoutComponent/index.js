import Footer from "../Footer";
import Header from "../Header";
import * as S from "./styles";

const LayoutComponent = ({ children }) => {
  return (
    <S.Container>
      <Header />

      <S.Content>{children}</S.Content>

      <S.FooterStyled>
        <Footer />
      </S.FooterStyled>
    </S.Container>
  );
};
export default LayoutComponent;
