import Carousel from "react-elastic-carousel";
import * as S from "./styles";

const Slide = ({ children }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Fotos do projeto</S.Title>
        <Carousel itemsToShow={1.5} pagination={false} showArrows={false}>
          {children}
        </Carousel>
      </S.Content>
    </S.Container>
  );
};

export default Slide;
