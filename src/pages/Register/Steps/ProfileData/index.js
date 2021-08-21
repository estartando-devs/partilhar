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
            type="text"
            textLabel="Nome da ONG"
            htmlFor="ong"
            placeholder="Ex: Ong Kids"
            id="ong"
            title="text"
            onChange={onChange}
            name="ong"
            value={ong}
          />
          <InputWithLabel
            type="text"
            textLabel="Razão Social"
            htmlFor="reason"
            placeholder="Ex: Associação de Assistência à criança"
            id="reason"
            onChange={onChange}
            name="reason"
            value={reason}
          />
          <InputWithLabel
            type="text"
            textLabel="CNPJ"
            htmlFor="cnpj"
            placeholder="11.111.111/0001-00"
            id="cnpj"
            onChange={onChange}
            name="cnpj"
            value={cnpj}
          />
          <InputWithLabel
            type="text"
            textLabel="Telefone"
            htmlFor="phone"
            placeholder="(11)91111-1111"
            id="phone"
            onChange={onChange}
            name="phone"
            value={phone}
          />
          <InputWithLabel
            type="text"
            textLabel="Endereço"
            htmlFor="address"
            placeholder="Ex: Rua: Um"
            id="address"
            onChange={onChange}
            name="address"
            value={address}
          />
          <InputWithLabel
            type="text"
            textLabel="Número"
            htmlFor="number"
            placeholder="Ex: 1111"
            id="number"
            onChange={onChange}
            name="number"
            value={number}
          />
          <InputWithLabel
            type="text"
            textLabel="Bairro"
            htmlFor="district"
            placeholder="Ex: Jardim Dois"
            id="district"
            onChange={onChange}
            name="district"
            value={district}
          />
          <InputWithLabel
            type="text"
            textLabel="Email"
            htmlFor="email"
            placeholder="Ex: fulano@gmail.com"
            id="email"
            onChange={onChange}
            name="email"
            value={email}
          />
          <InputWithLabel
            type="password"
            textLabel="Senha"
            htmlFor="password"
            placeholder="**********"
            id="password"
            onChange={onChange}
            name="password"
            value={password}
          />
          <InputWithLabel
            type="password"
            textLabel="Confirmar Senha"
            htmlFor="confirmPassword"
            placeholder="**********"
            id="confirmPassword"
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
