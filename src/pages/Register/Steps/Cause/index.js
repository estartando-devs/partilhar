import { useState } from "react";
import * as S from "./styles";
import { filters } from "../../../../mocks/filterData";

const Cause = () => {
  const [color, setColor] = useState("");

  function onClick(bgColor) {
    setColor(bgColor);
    console.log("cliquei", color);
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
                  onClick={() => onClick(cause.bgColor)}
                />
                {/* <S.Radio  bgColor={color} /> */}
              </S.Label>
            </S.Item>
          ))}
        </S.ContentCause>
        <S.LabelText>Faça um texto descritivo sobre a sua ONG</S.LabelText>
        <S.TextArea placeholder="Ex: data de fundação, objetivo, meta, histórico..." />
        <S.Counter>0/400</S.Counter>
      </S.Content>
    </S.Container>
  );
};

export default Cause;
