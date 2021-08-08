import * as S from "./styles";
import * as I from "../../assets/img";

const Card = () => {
  return (
    <S.ContainerCard>
      <img src={I.ongcard} alt="Ong Wonder" />
      <S.ContainerOngInfor>
        <S.TextTitle>Ong Wonder</S.TextTitle>
        <S.TextContents>
          Somos uma ong especializada em cuidados com mulheres vítimas de abusos
          psicológicosm onde de forma cultural e dinâmica as mesmas encaram seus
          medos e adquirem novas metas e desejos para o futuro. Um lugar
          construído com apoio e amor.
        </S.TextContents>
        <S.TextLink>Ver mais...</S.TextLink>
      </S.ContainerOngInfor>
    </S.ContainerCard>
  );
};
export default Card;
