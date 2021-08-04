import Footer from "../Footer";
import Header from "../Header";
import * as S from "./styles";

const LayoutComponent = ({ children }) => {
  return (
    <S.Container>
      <Header />
      {children}
      <Footer />
    </S.Container>
  );
};
export default LayoutComponent;
