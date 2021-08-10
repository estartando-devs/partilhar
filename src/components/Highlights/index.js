import { useHistory } from "react-router-dom";
import * as S from "./styles";
import Border from "../Border";
import * as I from "../../assets/img";

const Highlights = () => {
  const history = useHistory();

  const handleClick = (valor) => {
    history.push(`/busca?q=${valor}`);
  };
  const ongs = [
    {
      value: 0,
      img: I.cats,
      text: "ONG Home Pets",
      ImgSubtitle: I.animallight,
      typeOng: "animais",
    },
    {
      value: 1,
      img: I.kids,
      text: "ONG Kids",
      ImgSubtitle: I.kidlight,
      typeOng: "criancas",
    },
    {
      value: 2,
      img: I.care,
      text: "ONG Care",
      ImgSubtitle: I.oldlight,
      typeOng: "idosos",
    },
  ];
  return (
    <S.Container>
      <S.ContainerContent>
        <S.Title>
          <S.TextStrong>ONGS</S.TextStrong> em destaque
        </S.Title>
        <Border>
          <S.Content>
            {ongs.map((ong) => (
              <S.Card key={ong.value} onClick={() => handleClick(ong.typeOng)}>
                <S.Img src={ong.img} alt={ong.text} />
                <S.CardSubtitle>
                  <S.ImgSubtitle src={ong.ImgSubtitle} alt={ong.text} />
                  <S.Text>{ong.text}</S.Text>
                </S.CardSubtitle>
              </S.Card>
            ))}
          </S.Content>
        </Border>
      </S.ContainerContent>
    </S.Container>
  );
};

export default Highlights;
