import * as S from "./styles";
import Border from "../Border";
import * as I from "../../assets/img";

const Highlights = () => {
  return (
    <S.Container>
      <S.ContainerContent>
        <S.Title>
          <S.TextStrong>ONGS</S.TextStrong> em destaque
        </S.Title>
        <Border>
          <S.Content>
            <S.Card>
              <S.Img src={I.cats} alt="Ong Home Pets" />
              <S.CardSubtitle>
                <S.ImgSubtitle src={I.animallight} alt="Ong Animais" />
                <S.Text>ONG Home Pets</S.Text>
              </S.CardSubtitle>
            </S.Card>

            <S.Card>
              <S.Img src={I.kids} alt="Ong kid" />
              <S.CardSubtitle>
                <S.ImgSubtitle src={I.kidlight} alt="Kids" />
                <S.Text>ONG Kids</S.Text>
              </S.CardSubtitle>
            </S.Card>
            <S.Card>
              <S.Img src={I.care} alt="Ong Care" />
              <S.CardSubtitle>
                <S.ImgSubtitle src={I.oldlight} alt="Ong Animais" />
                <S.Text>ONG Care</S.Text>
              </S.CardSubtitle>
            </S.Card>
          </S.Content>
        </Border>
      </S.ContainerContent>
    </S.Container>
  );
};

export default Highlights;
