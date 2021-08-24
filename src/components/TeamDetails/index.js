import * as S from "./styles";
import * as I from "../../assets/img";
import { teams } from "../../mocks/teamData";

const TeamDetails = () => {
  const linkUrl = (url) => {
    window.open(url, "_blank");
    return null;
  };

  return (
    <>
      <S.Container>
        <S.Content>
          <S.Title>Equipe</S.Title>
          <S.SubTitle>UX/UI Designers</S.SubTitle>
          <S.ContainerImg>
            {teams.slice(0, 4).map((team) => (
              <S.BoxImg key={team.value} onClick={() => linkUrl(team.page)}>
                <S.PhotoImg src={team.img} alt={team.text} />
                <S.TitleImg>{team.text}</S.TitleImg>
              </S.BoxImg>
            ))}
          </S.ContainerImg>
          <S.SubTitle>Desenvolvedoras</S.SubTitle>
          <S.ContainerImg>
            {teams.slice(-3).map((team) => (
              <S.BoxImg key={team.value} onClick={() => linkUrl(team.page)}>
                <S.PhotoImg src={team.img} alt={team.text} />
                <S.TitleImg>{team.text}</S.TitleImg>
              </S.BoxImg>
            ))}
          </S.ContainerImg>
          <S.Titles>Apoio</S.Titles>
          <S.PhotoImgs
            src={I.estartando}
            alt="Estartando Devs"
            onClick={() => linkUrl("https://estartandodevs.com.br/")}
          />
          <S.TitleCompany
            onClick={() => linkUrl("https://estartandodevs.com.br/")}
          >
            Estartando Devs
          </S.TitleCompany>
          <S.BoxSocialMedias>
            <S.PhotoImgSocial
              src={I.facebookGreen}
              alt="Facebook"
              onClick={() => linkUrl("https://www.facebook.com/estartandoDevs")}
            />
            <S.PhotoImgSocial
              src={I.instagramGreen}
              alt="Instagram"
              onClick={() =>
                linkUrl("https://www.instagram.com/estartandodevs/")
              }
            />
          </S.BoxSocialMedias>
        </S.Content>
      </S.Container>
    </>
  );
};
export default TeamDetails;
