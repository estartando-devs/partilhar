import { useHistory } from "react-router-dom";
import * as S from "./styles";
import Border from "../Border";
import { ongs } from "../../mocks/ongsData";

const Highlights = () => {
  const history = useHistory();

  const handleClick = (ong) => {
    history.push("/ongdetails", ong);
  };

  return (
    <S.Container>
      <S.ContainerContent>
        <S.Title>
          <S.TextStrong>ONGS</S.TextStrong> em destaque
        </S.Title>
        <Border>
          <S.Content>
            {ongs.slice(0, 3).map((ong) => (
              <S.Card key={ong.value} onClick={() => handleClick(ong)}>
                <S.Img src={ong.img} alt={ong.title} />
                <S.CardSubtitle>
                  <S.ImgSubtitle src={ong.ImgSubtitle} alt={ong.title} />
                  <S.Text>{ong.title}</S.Text>
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
