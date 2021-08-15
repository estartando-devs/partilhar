import * as S from "./styles";
import * as I from "../../assets/img";

const Card = ({ title, text, img, onClick }) => {
  return (
    <S.Container>
      <S.ContainerCard onClick={onClick}>
        <S.ImgCard src={img} alt={title} />
        <S.ContainerOngInfor>
          <S.TextTitle>{title} </S.TextTitle>
          <S.ContainerIcon>
            <S.Icon src={I.whatsappGreen} alt="Facebook" />
            <S.Icon src={I.facebookGreen} alt="Facebook" />
            <S.Icon src={I.instagramGreen} alt="Instagram" />
          </S.ContainerIcon>
          <S.TextContents>{text}</S.TextContents>
          <S.TextLink>Ver mais...</S.TextLink>
        </S.ContainerOngInfor>
      </S.ContainerCard>
    </S.Container>
  );
};
export default Card;
