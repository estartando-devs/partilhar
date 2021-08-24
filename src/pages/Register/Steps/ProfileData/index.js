import { useEffect } from "react";
import * as S from "./styles";
import { InputWithLabel, Upload } from "../../../../components";

const ProfileData = ({ values, setValues }) => {
  function onUpload(image) {
    setValues({ ...values, logo: image.url });
  }

  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function getDatasLocalStorage() {
    const datas = localStorage.getItem("datas");
    setValues(JSON.parse(datas) || []);
  }

  useEffect(() => {
    getDatasLocalStorage();
  }, []);

  const {
    ong,
    address,
    cnpj,
    confirmPassword,
    password,
    district,
    email,
    number,
    phone,
    reason,
    logo,
  } = values;

  return (
    <S.Container>
      <S.Content>
        <S.Title>Cadastre-se</S.Title>

        <S.Text>
          Você fazendo o seu cadastro torna ainda mais fácil a sua comunicação
          com o doador.
        </S.Text>
        <Upload onUpload={onUpload} image={logo} />
        <S.SubTitle>1.Cadastro de dados</S.SubTitle>
        <S.Form>
          <InputWithLabel
            textLabel="Nome da ONG"
            placeholder="Ex: Ong Kids"
            title="text"
            onChange={onChange}
            name="ong"
            value={ong}
          />
          <InputWithLabel
            textLabel="Razão Social"
            placeholder="Ex: Associação de Assistência à criança"
            onChange={onChange}
            name="reason"
            value={reason}
          />
          <InputWithLabel
            textLabel="CNPJ"
            placeholder="11.111.111/0001-00"
            onChange={onChange}
            name="cnpj"
            value={cnpj}
          />
          <InputWithLabel
            textLabel="Telefone"
            placeholder="(11)91111-1111"
            onChange={onChange}
            name="phone"
            value={phone}
          />
          <InputWithLabel
            textLabel="Endereço"
            placeholder="Ex: Rua: Um"
            onChange={onChange}
            name="address"
            value={address}
          />
          <InputWithLabel
            textLabel="Número"
            placeholder="Ex: 1111"
            onChange={onChange}
            name="number"
            value={number}
          />
          <InputWithLabel
            textLabel="Bairro"
            placeholder="Ex: Jardim Dois"
            onChange={onChange}
            name="district"
            value={district}
          />
          <InputWithLabel
            textLabel="Email"
            placeholder="Ex: fulano@gmail.com"
            onChange={onChange}
            name="email"
            value={email}
          />
          <InputWithLabel
            type="password"
            textLabel="Senha"
            placeholder="**********"
            onChange={onChange}
            name="password"
            value={password}
          />
          <InputWithLabel
            type="password"
            textLabel="Confirmar Senha"
            placeholder="**********"
            onChange={onChange}
            name="confirmPassword"
            value={confirmPassword}
          />
        </S.Form>
      </S.Content>
    </S.Container>
  );
};

export default ProfileData;
