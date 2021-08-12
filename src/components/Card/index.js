import { useHistory } from "react-router-dom";
import * as S from "./styles";

const Card = ({ title, text, img }) => {
  const history = useHistory();

  function handleClick() {
    history.push("/ongdetails");
  }

  return (
    <S.ContainerCard onClick={handleClick}>
      <S.ImgCard src={img} alt={title} />
      <S.ContainerOngInfor>
        <S.TextTitle>{title} </S.TextTitle>
        <S.TextContents>{text}</S.TextContents>
        <S.TextLink>Ver mais...</S.TextLink>
      </S.ContainerOngInfor>
    </S.ContainerCard>
  );
};
export default Card;
