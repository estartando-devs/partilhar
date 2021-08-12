import * as S from "./styles";
import * as I from "../../assets/img";

const Banner = () => {
  return (
    <S.Container>
      <S.Title>Ong Wonder</S.Title>
      <S.Img src={I.banner} />
    </S.Container>
  );
};

export default Banner;
