import * as S from "./styles";
import { Slide, Banner, Description } from "../../components";
import * as I from "../../assets/img";

const Dandara = () => {
  return (
    <>
      <Slide>
        <S.Imagem src={I.photoone} />
        <S.Imagem src={I.phototwo} />
      </Slide>

      <Banner titulo="Ong Wonder" img={I.banner} />

      <Description
        title="Nossa história"
        text="Somos uma ong especializada em cuidados com mulheres vítimas de abusos
        psicológicosm onde de forma cultural e dinâmica as mesmas encaram seus
        medos e adquirem novas metas e desejos para o futuro. Um lugar
        construído com apoio e amor."
      />
    </>
  );
};

export default Dandara;
