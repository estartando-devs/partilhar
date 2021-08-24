import * as S from "./styles";

const Banner = ({ title, img }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Img src={img} />
      </S.Content>
    </S.Container>
  );
};

export default Banner;
