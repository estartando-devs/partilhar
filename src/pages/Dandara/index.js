import * as S from "./styles";
import { Slide } from "../../components";
import * as I from "../../assets/img";

const Dandara = () => {
  return (
    <>
      <Slide>
        <S.Imagem src={I.photoone} />
        <S.Imagem src={I.phototwo} />
      </Slide>
    </>
  );
};

export default Dandara;
