import { useState } from "react";
import { useHistory } from "react-router-dom";

import theme from "../../styles/theme";

import {
  InputWithLabel,
  Checkbox,
  Button,
  LayoutComponent,
} from "../../components";

import { google } from "../../assets/img";

import { login } from "../../services/auth.service";

import * as S from "./styles";

const Login = () => {
  const borderColor = theme.palette.text.secondary;
  const [user, setUser] = useState({});
  const history = useHistory();

  function onChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function onClick() {
    const { success } = await login(user.email, user.password);

    if (success) history.push("/");
  }

  return (
    <LayoutComponent dontShowSearch>
      <S.Container>
        <S.Content>
          <S.Title>Seja bem vindo(a)!</S.Title>
          <S.ContainerInput>
            <InputWithLabel
              name="email"
              textLabel="Seu email"
              width="328px"
              borderColor={borderColor}
              fontWeight="500"
              onChange={onChange}
            />
            <InputWithLabel
              name="password"
              textLabel="Senha"
              width="328px"
              borderColor={borderColor}
              fontWeight="500"
              type="password"
              onChange={onChange}
            />
          </S.ContainerInput>
          <S.ContainerRemember>
            <Checkbox text="Lembre-me" />
            <S.TextLink fontSize="16px">Esqueci minha senha</S.TextLink>
          </S.ContainerRemember>
          <S.ContainerButtom>
            <Button
              widthMax="229px"
              height="38px"
              color={theme.palette.text.light.primary}
              widthMaxMedia="315px"
              heightMedia="50px"
              onClick={onClick}
            >
              ENTRAR
            </Button>
            <S.Text>Ou</S.Text>
            <Button
              widthMax="229px"
              height="38px"
              backgroundColor={theme.palette.text.light.primary}
              border={`1px solid ${theme.palette.text.secondary}`}
              widthMaxMedia="315px"
              heightMedia="50px"
              weightMedia="400"
            >
              <S.Icon src={google} alt="google" />
              Entrar com Conta Google
            </Button>
          </S.ContainerButtom>
          <S.ContainerNew>
            <S.Text>Você é novo por aqui?</S.Text>
            <S.TextLink to="/cadastro">Fazer Cadastro</S.TextLink>
          </S.ContainerNew>
        </S.Content>
      </S.Container>
    </LayoutComponent>
  );
};

export default Login;
