import * as S from "./styles";
import * as I from "../../assets/img";
import theme from "../../styles/theme";

const Tag = () => {
  const query = new URLSearchParams(window.location.search).get("q");

  const filters = [
    {
      value: 0,
      icon: I.woman,
      title: "Apoio às Mulheres",
      bgColor: theme.palette.tertiary.tertiary_1,
    },
    {
      value: 1,
      icon: I.animal,
      title: "Animais",
      bgColor: theme.palette.tertiary.tertiary_2,
    },
    {
      value: 2,
      icon: I.kid,
      title: "Crianças",
      bgColor: theme.palette.tertiary.tertiary_3,
    },
    {
      value: 3,
      icon: I.culture,
      title: "Cultura",
      bgColor: theme.palette.tertiary.tertiary_4,
    },
    {
      value: 4,
      icon: I.sport,
      title: "Esportes",
      bgColor: theme.palette.tertiary.tertiary_5,
    },
    {
      value: 5,
      icon: I.oldman,
      title: "Idosos",
      bgColor: theme.palette.tertiary.tertiary_6,
    },
    {
      value: 6,
      icon: I.ambience,
      title: "Meio Ambiente",
      bgColor: theme.palette.tertiary.tertiary_7,
    },
    {
      value: 7,
      icon: I.cheers,
      title: "Saúde",
      bgColor: theme.palette.tertiary.tertiary_8,
    },
  ];

  const causa = filters.find((ong) => {
    return ong.title === query;
  });

  return (
    <S.Container>
      {causa && (
        <S.Content backgroundColor={causa.bgColor} key={causa.value}>
          <S.Imagem src={causa.icon} alt="Mulher" />
          <S.Text>{causa.title}</S.Text>
        </S.Content>
      )}
    </S.Container>
  );
};

export default Tag;
