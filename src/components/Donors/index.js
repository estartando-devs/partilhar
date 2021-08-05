import * as S from "./styles";
import * as I from "../../assets/img";

const Donors = () => {
  return (
    <S.Container>
      <S.Title>
        <S.TitleStrong>Doadores </S.TitleStrong>em destaque
      </S.Title>

      <S.ContainerImg>
        <img src={I.donorsone} alt="donor one " />
        <img src={I.donorstwo} alt="donor two  " />
      </S.ContainerImg>
    </S.Container>
  );
};
export default Donors;
