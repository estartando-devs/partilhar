import { useEffect } from "react";
import * as S from "./styles";
import { Upload } from "../../../../components";

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
          <S.Label htmlFor="ong">
            Nome da ONG
            <S.Input
              placeholder="Ex: Ong Kids"
              id="ong"
              title="text"
              onChange={onChange}
              name="ong"
              value={ong}
            />
          </S.Label>
          <S.Label htmlFor="reason" id="labelReason">
            Razão Social
            <S.Input
              placeholder="Ex: Associação de Assistência à criança"
              id="reason"
              title="text"
              onChange={onChange}
              name="reason"
              value={reason}
            />
          </S.Label>
          <S.Label htmlFor="cnpj" id="labelCnpj">
            CNPJ{" "}
            <S.Input
              type="text"
              placeholder="11.111.111/0001-00"
              id="cnpj"
              onChange={onChange}
              name="cnpj"
              value={cnpj}
            />
          </S.Label>
          <S.Label htmlFor="phone" id="labePhone">
            Telefone
            <S.Input
              type="text"
              placeholder="(11)91111-1111"
              id="phone"
              onChange={onChange}
              name="phone"
              value={phone}
            />
          </S.Label>
          <S.Label htmlFor="address" id="labelAddress">
            Endereço
            <S.Input
              type="text"
              placeholder="Ex: Rua: Um"
              id="address"
              onChange={onChange}
              name="address"
              value={address}
            />
          </S.Label>
          <S.Label htmlFor="number" id="labelNumber">
            Número
            <S.Input
              type="text"
              placeholder="Ex: 1111"
              id="number"
              onChange={onChange}
              name="number"
              value={number}
            />
          </S.Label>
          <S.Label htmlFor="district" id="labelDistrict">
            Bairro
            <S.Input
              type="text"
              placeholder="Ex: Jardim Dois"
              id="district"
              onChange={onChange}
              name="district"
              value={district}
            />
          </S.Label>
          <S.Label htmlFor="email" id="labelEmail">
            Email
            <S.Input
              type="text"
              placeholder="Ex: fulano@gmail.com"
              id="email"
              onChange={onChange}
              name="email"
              value={email}
            />
          </S.Label>
          <S.Label htmlFor="password" id="labelPassword">
            Senha
            <S.Input
              type="password"
              placeholder="**********"
              id="password"
              onChange={onChange}
              name="password"
              value={password}
            />
          </S.Label>
          <S.Label htmlFor="confirmPassword" id="labelConfirmPassword">
            Confirmar Senha
            <S.Input
              type="password"
              placeholder="**********"
              id="confirmPassword"
              onChange={onChange}
              name="confirmPassword"
              value={confirmPassword}
            />
          </S.Label>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};

export default ProfileData;
