import * as S from "./styles";

const Checkbox = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Checkbox id="checkbox" type="checkbox" />
        <S.Label htmlFor="checkbox">Lembre-me</S.Label>
      </S.Content>
    </S.Container>
  );
};

export default Checkbox;
