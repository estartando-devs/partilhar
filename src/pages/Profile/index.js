import {
  CarouselComponent,
  InputWithLabel,
  LayoutComponent,
  TextArea,
  Tag,
} from "../../components";

import { causes } from "../../utils/Causes";
import { edit } from "../../assets/img";

import theme from "../../styles/theme";
import * as S from "./styles";

const Profile = () => {
  const ong = JSON.parse(localStorage.getItem("userOng"));
  const findCause = causes[ong?.niche?.cause];

  return (
    <LayoutComponent dontShowSearch>
      <Tag
        bgColor={findCause.bgColor}
        niche={findCause.title}
        icon={findCause.icon}
      />
      <S.Container>
        <S.ContainerProfile>
          <S.Profile>
            <S.ProfileImg>
              <S.Banner src={ong.logo} alt="Logo Ong" />
              <S.ProfileEdit>
                <S.ImgEdit src={edit} alt="Editar perfil" />
                <S.TextEdit>Editar Perfil</S.TextEdit>
              </S.ProfileEdit>
            </S.ProfileImg>
            <S.ProfileData>
              <S.Title>{ong.ong}</S.Title>
              <S.Text>{ong.email}</S.Text>
              <S.Text> {ong.phone}</S.Text>
              <S.Text>{ong.cnpj}</S.Text>
            </S.ProfileData>
          </S.Profile>
          <InputWithLabel
            textLabel="Causa"
            fontSize="16px"
            value={ong.niche.title}
            readOnly
          />

          <TextArea
            textLabel="Descrição"
            fontSize="16px"
            width="340px"
            widthMedia="750px"
            name="description"
            borderColor={theme.palette.text.placeholder.primary}
            value={ong.description}
            readOnly
          />
          <InputWithLabel
            textLabel="Facebook"
            fontSize="16px"
            value={ong.networks.facebook}
            readOnly
          />
          <InputWithLabel
            textLabel="Instagram"
            fontSize="16px"
            value={ong.networks.instagram}
            readOnly
          />
          <InputWithLabel
            textLabel="Linkendin"
            fontSize="16px"
            value={ong.networks.linkedin}
            readOnly
          />
          <InputWithLabel
            textLabel="Twitter"
            fontSize="16px"
            value={ong.networks.twitter}
            readOnly
          />
          {!!ong.projectImages.length && (
            <CarouselComponent>
              {ong.projectImages.map((image) => (
                <S.Img src={image.url} alt={image.name} />
              ))}
            </CarouselComponent>
          )}
        </S.ContainerProfile>
      </S.Container>
    </LayoutComponent>
  );
};

export default Profile;
