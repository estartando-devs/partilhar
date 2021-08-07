import * as S from "./styles";
import * as I from "../../assets/img";

const Donors = () => {
  return (
    <S.Container>
      <S.Title>
        <S.TitleStrong>Doadores </S.TitleStrong>em destaque
      </S.Title>

      <S.ContainerImg>
        <S.ContainerInfor>
          <img src={I.donorsone} alt="donor one " />
          <S.ContainerTextInfo>
            <S.TextInfor>Doador: João Silva</S.TextInfor>
            <S.TextInfor>ONG Amor</S.TextInfor>
          </S.ContainerTextInfo>
        </S.ContainerInfor>
        <S.ContainerInfor>
          <img src={I.donorstwo} alt="donor two  " />

          <S.ContainerTextInfo>
            <S.TextInfor>Doador: Pedro Silva</S.TextInfor>
            <S.TextInfor>ONG Apoio</S.TextInfor>
          </S.ContainerTextInfo>
        </S.ContainerInfor>
      </S.ContainerImg>
    </S.Container>
  );
};
export default Donors;
