import * as S from "./styles";
import { Slide, Banner } from "../../components";
import * as I from "../../assets/img";

const Dandara = () => {
  return (
    <>
      <Slide>
        <S.Imagem src={I.photoone} />
        <S.Imagem src={I.phototwo} />
      </Slide>

      <Banner titulo="Ong Wonder" img={I.banner} />
    </>
  );
};

export default Dandara;
