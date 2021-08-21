import * as S from "./styles";
import { InputWithLabel } from "../../../../components";
import * as I from "../../../../assets/img";

const BankData = ({ values, setValues }) => {
  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <S.Container>
      <S.Content>
        <S.Title>3. Dados Bancários</S.Title>
        <S.ContainerInput>
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
            textLabel="Conta"
            htmlFor="account"
            placeholder="1111-1"
            id="account"
            onChange={onChange}
            name="account"
            value={values.account}
          />
          <InputWithLabel
            type="text"
            textLabel="Operação (caso tiver)"
            htmlFor="operation"
            placeholder="-------------"
            id="operation"
            onChange={onChange}
            name="operation"
            value={values.operation}
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
          <S.Register>
            <S.IconRegister src={I.register} alt="cadastrar mais" />
            <S.TextRegister>Cadastrar mais</S.TextRegister>
          </S.Register>
        </S.ContainerInput>
      </S.Content>
    </S.Container>
  );
};

export default BankData;
