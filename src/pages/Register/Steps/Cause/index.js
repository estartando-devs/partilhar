import * as S from "./styles";
import { filters } from "../../../../mocks/filterData";

const Cause = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>2.Causas</S.Title>
        <S.SubTitle>Qual causa a sua ong pertence?</S.SubTitle>
        <S.ContentCause>
          {filters.map((cause) => (
            <S.Item key={cause.value}>
              <S.Label htmlFor={cause.niche}>{cause.title}</S.Label>
              <S.Input type="radio" id={cause.niche} name="radio" />
              <S.Radio bgColorBorder={cause.bgColor} />
            </S.Item>
          ))}
        </S.ContentCause>

        <S.LabelText>Faça um texto descritivo sobre a sua ONG</S.LabelText>
        <S.InputText placeholder="Ex: data de fundação, objetivo, meta, histórico..." />
      </S.Content>
    </S.Container>
  );
};

export default Cause;
