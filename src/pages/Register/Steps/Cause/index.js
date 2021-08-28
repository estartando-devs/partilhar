import { useState } from "react";

import { TextArea } from "../../../../components/TextArea/styles";
import { filters } from "../../../../mocks/filterData";

import * as S from "./styles";

const Cause = ({ setNiche, values, setValues }) => {
  const [counter, setCounter] = useState(0);

  function registerDatas(nicho) {
    setNiche(nicho);
    setValues({ ...values, niche: nicho });
  }

  function limiterCaracter(e) {
    setCounter(e.target.value.length);
  }

  function onChange(value) {
    setValues({ ...values, description: value });
  }

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
                    registerDatas(filter.niche);
                  }}
                  checked={filter.niche === values?.niche}
                />
              </S.Label>
            </S.Item>
          ))}
        </S.ContentCause>
        <S.Text>Faça um texto descritivo sobre a sua ONG:</S.Text>
        <TextArea
          placeholder="Ex: data de fundação, objetivo, meta, histórico..."
          onChange={(e) => {
            limiterCaracter(e);
            onChange(e.target.value);
          }}
          maxLength={400}
          name="description"
          value={values.description}
        />
        <S.Counter>{counter}/400</S.Counter>
      </S.Content>
    </S.Container>
  );
};

export default Cause;
