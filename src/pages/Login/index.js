import { useState } from "react";
import { useHistory } from "react-router-dom";

import theme from "../../styles/theme";

import {
  InputWithLabel,
  Checkbox,
  Button,
  LayoutComponent,
  Loading,
} from "../../components";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
} from "../../services/auth.service";

import { google } from "../../assets/img";

import * as S from "./styles";
import { getOngs } from "../../services/ongs.service";

const Login = () => {
  const borderColor = theme.palette.text.secondary;
  const [user, setUser] = useState({});
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function onChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function onClick() {
    setErrorText("");
    setLoading(true);
    try {
      const response = await loginWithEmailAndPassword({
        email: user.email,
        password: user.password,
      });
      const ongs = await getOngs();
      const haveOng = ongs.find((ong) => ong.userId === response.user.id);
      localStorage.setItem("user", JSON.stringify(response.user));

      if (!haveOng) {
        history.push("/cadastro");
        return;
      }

      localStorage.setItem("userOng", JSON.stringify(haveOng));
      setLoading(false);
      history.push("/");
    } catch (err) {
      setLoading(false);
      setErrorText(err.message);
    }
  }

  async function handleLoginGoogle() {
    setLoading(true);
    setErrorText("");
    try {
      const response = await loginWithGoogle();
      const ongs = await getOngs();
      const haveOng = ongs.find((ong) => ong.userId === response.user.id);
      localStorage.setItem("user", JSON.stringify(response.user));

      if (!haveOng) {
        history.push("/cadastro");
        return;
      }

      setLoading(false);
      localStorage.setItem("userOng", JSON.stringify(haveOng));
      history.push("/");
    } catch (err) {
      setLoading(false);
      setErrorText(err.message);
    }
  }

  return (
    <LayoutComponent dontShowSearch>
      {loading ? (
        <S.ContainerLoading>
          <Loading />
        </S.ContainerLoading>
      ) : (
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
              <S.TextLink to="/login" fontSize="16px">
                Esqueci minha senha
              </S.TextLink>
            </S.ContainerRemember>
            {errorText && <S.ErrorText>{errorText}</S.ErrorText>}
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
                onClick={handleLoginGoogle}
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
      )}
    </LayoutComponent>
  );
};

export default Login;
