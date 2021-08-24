import Footer from "../Footer";
import Header from "../Header";
import * as S from "./styles";

const LayoutComponent = ({ children, dontShowSearch }) => {
  return (
    <S.Container>
      <Header dontShowSearch={dontShowSearch} />

      <S.Content>{children}</S.Content>

      <S.FooterStyled>
        <Footer />
      </S.FooterStyled>
    </S.Container>
  );
};
export default LayoutComponent;
