import * as S from "./styles";
import theme from "../../styles/theme";

const Border = ({ children }) => {
  const ColorsTop = [
    {
      value: 1,
      bgColor: theme.palette.tertiary.tertiary_1,
    },
    {
      value: 2,
      bgColor: theme.palette.tertiary.tertiary_2,
    },
    {
      value: 3,
      bgColor: theme.palette.tertiary.tertiary_3,
    },
    {
      value: 4,
      bgColor: theme.palette.tertiary.tertiary_4,
    },
  ];

  const ColorsBottom = [
    {
      value: 5,
      bgColor: theme.palette.tertiary.tertiary_5,
    },
    {
      value: 6,
      bgColor: theme.palette.tertiary.tertiary_6,
    },
    {
      value: 7,
      bgColor: theme.palette.tertiary.tertiary_7,
    },
    {
      value: 8,
      bgColor: theme.palette.tertiary.tertiary_8,
    },
  ];

  return (
    <S.Container>
      <S.ContainerBorder>
        {ColorsTop.map((color) => (
          <S.Card backgroundColor={color.bgColor} key={color.value} />
        ))}
      </S.ContainerBorder>

      {children}

      <S.ContainerBorder>
        {ColorsBottom.map((color) => (
          <S.Card backgroundColor={color.bgColor} key={color.value} />
        ))}
      </S.ContainerBorder>
    </S.Container>
  );
};
export default Border;
