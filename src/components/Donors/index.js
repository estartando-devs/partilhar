import * as S from "./styles";
import * as I from "../../assets/img";

const Donors = () => {
  return (
    <S.Container>
      <S.ContentDonors>
        <S.Title>
          <S.TitleStrong>Doadores </S.TitleStrong>em destaque
        </S.Title>
        <S.ContainerDonor>
          <S.ContainerCard>
            <S.ImagemCard src={I.donorsone} alt="donor one " />
            <S.ContainerTextInfo>
              <S.TextInfor>Doador: João Silva</S.TextInfor>
              <S.TextInfor>ONG Amor</S.TextInfor>
            </S.ContainerTextInfo>
          </S.ContainerCard>
          <S.ContainerCard>
            <S.ImagemCard src={I.donorstwo} alt="donor one " />
            <S.ContainerTextInfo>
              <S.TextInfor>Doador: Pedro Silva</S.TextInfor>
              <S.TextInfor>ONG Apoio</S.TextInfor>
            </S.ContainerTextInfo>
          </S.ContainerCard>
        </S.ContainerDonor>
      </S.ContentDonors>
    </S.Container>
  );
};
export default Donors;
