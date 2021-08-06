import * as S from "./styles";
import theme from "../../styles/theme";

const BorderTop = () => {
  const Colors = [
    {
      bgColor: theme.palette.tertiary.tertiary_1,
    },
    {
      bgColor: theme.palette.tertiary.tertiary_2,
    },
    {
      bgColor: theme.palette.tertiary.tertiary_3,
    },
    {
      bgColor: theme.palette.tertiary.tertiary_4,
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

export default BorderTop;
