import * as S from "./styles";
import * as I from "../../assets/img";

const Checkbox = ({ text }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Checkbox id="checkbox" bgImage={I.checkX} type="checkbox" />
        <S.Label htmlFor="checkbox">{text}</S.Label>
      </S.Content>
    </S.Container>
  );
};

export default Checkbox;
