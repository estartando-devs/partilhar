import * as S from "./styles";

const Card = ({ title, text, img, onClick }) => {
  return (
    <S.Container>
      <S.ContainerCard onClick={onClick}>
        <S.ImgCard src={img} alt={title} />
        <S.ContainerOngInfor>
          <S.TextTitle>{title} </S.TextTitle>
          <S.TextContents>{text}</S.TextContents>
          <S.TextLink>Ver mais...</S.TextLink>
        </S.ContainerOngInfor>
      </S.ContainerCard>
    </S.Container>
  );
};
export default Card;
