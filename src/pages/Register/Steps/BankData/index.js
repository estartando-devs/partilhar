import * as S from "./styles";
import { InputWithLabel } from "../../../../components";

const BankData = ({ values, setValues }) => {
  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <S.Container>
      <S.Content>
        <S.Title>3. Dados Bancários</S.Title>
        <InputWithLabel
          type="text"
          textLabel="Banco"
          htmlFor="bank"
          placeholder="Banco Bradesco"
          id="bank"
          onChange={onChange}
          name="bank"
          value={values.bank}
        />
        <InputWithLabel
          type="text"
          textLabel="Agência"
          htmlFor="agency"
          placeholder="237"
          id="agency"
          onChange={onChange}
          name="agency"
          value={values.agency}
        />
        <InputWithLabel
          type="text"
          textLabel="Número"
          htmlFor="numberBank"
          placeholder="1111-1"
          id="numberBank"
          onChange={onChange}
          name="numberBank"
          value={values.numberBank}
        />
        <InputWithLabel
          type="text"
          textLabel="Chave Pix"
          htmlFor="pix"
          placeholder="-------------"
          id="pix"
          onChange={onChange}
          name="pix"
          value={values.pix}
        />
        <InputWithLabel
          type="text"
          textLabel="Confirmar Chave Pix"
          htmlFor="confirmPix"
          placeholder="-------------"
          id="confirmPix"
          onChange={onChange}
          name="confirmPix"
          value={values.confirmPix}
        />
      </S.Content>
    </S.Container>
  );
};

export default BankData;
