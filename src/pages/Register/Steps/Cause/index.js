import { useState } from "react";
import * as S from "./styles";
import { filters } from "../../../../mocks/filterData";

const Cause = ({ setColor }) => {
  const [valueTextArea, setvalueTextArea] = useState("");
  const [counter, setCounter] = useState(0);
  function colorBottom(bgColor) {
    setColor(bgColor);
  }
  function limiterCaracter(e) {
    setCounter(e.target.value.length);
    setvalueTextArea(e.target.value);
  }

  return (
    <S.Container>
      <S.Content>
        <S.Title>2.Causas</S.Title>
        <S.SubTitle>Qual causa a sua ong pertence?</S.SubTitle>
        <S.ContentCause>
          {filters.map((cause) => (
            <S.Item key={cause.value}>
              <S.Label htmlFor={cause.niche}>
                {cause.title}
                <S.Input
                  type="radio"
                  id={cause.niche}
                  name="radio"
                  bgColor={cause.bgColor}
                  onClick={() => colorBottom(cause.bgColor)}
                />
              </S.Label>
            </S.Item>
          ))}
        </S.ContentCause>
        <S.LabelText>Faça um texto descritivo sobre a sua ONG</S.LabelText>
        <S.TextArea
          placeholder="Ex: data de fundação, objetivo, meta, histórico..."
          value={valueTextArea}
          onChange={(e) => limiterCaracter(e)}
          maxLength={400}
        />
        <S.Counter>{counter}/400</S.Counter>
      </S.Content>
    </S.Container>
  );
};

export default Cause;
