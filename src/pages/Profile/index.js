import * as S from "./styles";
import { logoOng, edit } from "../../assets/img";
import { InputWithLabel } from "../../components";
import { TextArea } from "../../components/TextArea/styles";

const Profile = () => {
  return (
    <S.Container>
      <S.ContainerProfile>
        <S.Profile>
          <S.ProfileImg>
            <S.Banner src={logoOng} alt="Logo Ong" />
            <S.ProfileEdit>
              <S.Img src={edit} alt="Editar perfil" />
              <S.Text>Editar Perfil</S.Text>
            </S.ProfileEdit>
          </S.ProfileImg>
          <S.ProfileData>
            <S.Title>Amar é cuidar</S.Title>
            <S.Text>amarecuidar@gmail.com</S.Text>
            <S.Text> (00) 00000-0000</S.Text>
            <S.Text>12.345.678/9101-11</S.Text>
          </S.ProfileData>
        </S.Profile>
        <InputWithLabel
          textLabel="Causa"
          placeholder="Apoio às mulheres"
          fontSize="16px"
        />
        <TextArea
          textLabel="Descrição"
          fontSize="16px"
          placeholder="Nossa ong se iniciou em ..."
          width="340px"
        />
        <InputWithLabel
          textLabel="Facebook"
          placeholder="Amar é cuidar"
          fontSize="16px"
        />
        <InputWithLabel
          textLabel="Instagram"
          placeholder="Amar é cuidar"
          fontSize="16px"
        />
        <InputWithLabel
          textLabel="Linkendin"
          placeholder="Amarecuidar"
          fontSize="16px"
        />
        <InputWithLabel
          textLabel="Twitter"
          placeholder="AmarÉcuidar"
          fontSize="16px"
        />
      </S.ContainerProfile>
    </S.Container>
  );
};

export default Profile;
