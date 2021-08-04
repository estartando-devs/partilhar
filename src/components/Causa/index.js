import * as S from "./styles";
import * as I from "../../assets/img";
import theme from "../../styles/theme";

const Causa = () => {
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
      icon: I.crianca,
      title: "Crianças",
      bgColor: theme.palette.tertiary.tertiary_3,
    },
    {
      value: 3,
      icon: I.cultura,
      title: "Cultura",
      bgColor: theme.palette.tertiary.tertiary_4,
    },
    {
      value: 4,
      icon: I.esporte,
      title: "Esportes",
      bgColor: theme.palette.tertiary.tertiary_5,
    },
    {
      value: 5,
      icon: I.idoso,
      title: "Idosos",
      bgColor: theme.palette.tertiary.tertiary_6,
    },
    {
      value: 6,
      icon: I.ambiente,
      title: "Meio Ambiente",
      bgColor: theme.palette.tertiary.tertiary_7,
    },
    {
      value: 7,
      icon: I.saude,
      title: "Saúde",
      bgColor: theme.palette.tertiary.tertiary_8,
    },
  ];
  return (
    <S.Container>
      <S.Titulo>
        Escolha uma <strong>ONG</strong> para doar:
      </S.Titulo>
      <S.ContainerCausa>
        {filters.map((filter) => (
          <S.Filter bgColor={filter.bgColor}>
            <S.Imagem src={filter.icon} alt={filter.title} />
            <S.TextFilter>{filter.title}</S.TextFilter>
          </S.Filter>
        ))}
      </S.ContainerCausa>
    </S.Container>
  );
};
export default Causa;
