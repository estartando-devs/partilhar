import * as S from "./styles";
import theme from "../../styles/theme";

const BorderBottom = () => {
  const Colors = [
    {
      bgColor: theme.palette.tertiary.tertiary_5,
    },
    {
      bgColor: theme.palette.tertiary.tertiary_6,
    },
    {
      bgColor: theme.palette.tertiary.tertiary_7,
    },
    {
      bgColor: theme.palette.tertiary.tertiary_8,
    },
  ];

  return (
    <S.Container>
      {Colors.map((color) => (
        <S.Card backgroundColor={color.bgColor} />
      ))}
    </S.Container>
  );
};

export default BorderBottom;
