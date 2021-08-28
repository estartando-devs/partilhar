import { useState, useEffect } from "react";
import {
  CarouselComponent,
  InputWithLabel,
  LayoutComponent,
  TextArea,
  Tag,
} from "../../components";

import * as S from "./styles";
import { edit } from "../../assets/img";
import theme from "../../styles/theme";

const Profile = () => {
  const [ong, setOng] = useState({});

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("datas"));
    setOng(datas);
  }, []);
  return (
    <LayoutComponent dontShowSearch>
      <Tag
        bgColor={ong?.niche?.bgColor}
        niche={ong?.niche?.title}
        icon={ong?.niche?.icon}
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
              <S.Title>{ong?.ong}</S.Title>
              <S.Text>{ong?.email}</S.Text>
              <S.Text> {ong?.phone}</S.Text>
              <S.Text>{ong?.cnpj}</S.Text>
            </S.ProfileData>
          </S.Profile>
          <InputWithLabel
            textLabel="Causa"
            fontSize="16px"
            value={ong?.niche?.title}
          />

          <TextArea
            textLabel="Descrição"
            fontSize="16px"
            width="340px"
            widthMedia="750px"
            name="description"
            borderColor={theme.palette.text.placeholder.primary}
            value={ong?.description}
          />
          <InputWithLabel
            textLabel="Facebook"
            fontSize="16px"
            value={ong?.networks?.facebook}
          />
          <InputWithLabel
            textLabel="Instagram"
            fontSize="16px"
            value={ong?.networks?.instagram}
          />
          <InputWithLabel
            textLabel="Linkendin"
            fontSize="16px"
            value={ong?.networks?.linkedin}
          />
          <InputWithLabel
            textLabel="Twitter"
            fontSize="16px"
            value={ong?.networks?.twitter}
          />
          <CarouselComponent>
            {ong?.projectImages?.map((image) => (
              <S.Img src={image.url} alt={image.name} />
            ))}
          </CarouselComponent>
        </S.ContainerProfile>
      </S.Container>
    </LayoutComponent>
  );
};

export default Profile;
