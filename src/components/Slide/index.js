import Carousel from "react-elastic-carousel";
import * as S from "./styles";
import { photos } from "../../mocks/photosData";

const Slide = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Fotos do projeto</S.Title>
        <S.Slide>
          <Carousel itemsToShow={1.5} pagination={false} showArrows={false}>
            {photos.map((photo) => (
              <S.ImageSlide key={photo.id} src={photo.img} alt={photo.text} />
            ))}
          </Carousel>
        </S.Slide>
        <S.ArrayPhotos>
          <S.ArrayPhotos>
            {photos.map((photo) => (
              <S.ImageArray key={photo.id} src={photo.img} alt={photo.text} />
            ))}
          </S.ArrayPhotos>
        </S.ArrayPhotos>
      </S.Content>
    </S.Container>
  );
};

export default Slide;
