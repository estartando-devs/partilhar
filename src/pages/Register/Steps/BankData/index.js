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
            textLabel="Banco"
            placeholder="Banco Bradesco"
            onChange={onChange}
            name="bank"
            value={values.bank}
          />
          <InputWithLabel
            textLabel="Agência"
            placeholder="237"
            onChange={onChange}
            name="agency"
            value={values.agency}
          />

          <InputWithLabel
            textLabel="Conta"
            placeholder="1111-1"
            onChange={onChange}
            name="account"
            value={values.account}
          />
          <InputWithLabel
            textLabel="Operação (caso tiver)"
            placeholder="-------------"
            onChange={onChange}
            name="operation"
            value={values.operation}
          />
          <InputWithLabel
            textLabel="Chave Pix"
            placeholder="-------------"
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
