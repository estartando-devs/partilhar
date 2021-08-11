import { useHistory } from "react-router-dom";
import * as S from "./styles";
import { ongs } from "../../mocks/ongsData";

const Card = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/ongdetails");
  }

  return (
    <S.ContainerCard onClick={handleClick}>
      <>
        {ongs.map((ong) => (
          <S.ContainerCardInfor key={ong.value}>
            <S.ImgCard src={ong.img} alt={ong.title} />

            <S.ContainerOngInfor>
              <S.TextTitle>{ong.title} </S.TextTitle>
              <S.TextContents>{ong.text}</S.TextContents>
              <S.TextLink>Ver mais...</S.TextLink>
            </S.ContainerOngInfor>
          </S.ContainerCardInfor>
        ))}
      </>
    </S.ContainerCard>
  );
};
export default Card;
