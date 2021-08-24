import theme from "../../styles/theme";
import {
  InputWithLabel,
  Checkbox,
  Button,
  LayoutComponent,
} from "../../components";
import { google } from "../../assets/img";
import * as S from "./styles";

const Login = () => {
  const borderColor = theme.palette.text.secondary;
  return (
    <LayoutComponent dontShowSearch>
      <S.Container>
        <S.Content>
          <S.Title>Seja bem vindo(a)!</S.Title>
          <S.ContainerInput>
            <InputWithLabel
              textLabel="Seu email"
              width="328px"
              borderColor={borderColor}
              fontWeight="500"
            />
            <InputWithLabel
              textLabel="Senha"
              width="328px"
              borderColor={borderColor}
              fontWeight="500"
              type="password"
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
            <S.TextLink>Fazer Cadastro</S.TextLink>
          </S.ContainerNew>
        </S.Content>
      </S.Container>
    </LayoutComponent>
  );
};

export default Login;
