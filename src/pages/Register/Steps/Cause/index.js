import { useState, useEffect } from "react";
import * as S from "./styles";
import { filters } from "../../../../mocks/filterData";

const Cause = ({ setColor, values, setValues }) => {
  const [counter, setCounter] = useState(0);

  function registerDatas(bgColor, nicho, title) {
    setColor(bgColor);
    setValues({ ...values, nicho, title });
  }

  function getDatasLocalStorage() {
    const datas = localStorage.getItem("datas");
    setValues(JSON.parse(datas) || []);
  }
  function limiterCaracter(e) {
    setCounter(e.target.value.length);
  }
  function onChange(value) {
    setValues({ ...values, textArea: value });
  }

  useEffect(() => {
    getDatasLocalStorage();
  }, []);

  return (
    <S.Container>
      <S.Content>
        <S.Title>2.Causas</S.Title>
        <S.Text>Qual causa a sua ong pertence? Selecione uma opção:</S.Text>

        <S.ContentCause>
          {filters.map((filter) => (
            <S.Item key={filter.value}>
              <S.Label htmlFor={filter.niche}>
                {filter.title}
                <S.Input
                  type="radio"
                  id={filter.niche}
                  name="radio"
                  bgColor={filter.bgColor}
                  onClick={() => {
                    registerDatas(filter.bgColor, filter.niche, filter.title);
                  }}
                  checked={filter.niche === values.nicho}
                />
              </S.Label>
            </S.Item>
          ))}
        </S.ContentCause>
        <S.Text>Faça um texto descritivo sobre a sua ONG:</S.Text>
        <S.TextArea
          placeholder="Ex: data de fundação, objetivo, meta, histórico..."
          onChange={(e) => {
            limiterCaracter(e);
            onChange(e.target.value);
          }}
          maxLength={400}
          name="textArea"
          value={values.textArea}
        />
        <S.Counter>{counter}/400</S.Counter>
      </S.Content>
    </S.Container>
  );
};

export default Cause;
