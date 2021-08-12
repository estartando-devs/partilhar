import * as S from "./styles";

const Banner = ({ titulo, img }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{titulo}</S.Title>
        <S.Img src={img} />
      </S.Content>
    </S.Container>
  );
};

export default Banner;
