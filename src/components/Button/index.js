import { ButtonStyled } from "./styles";

const Button = ({
  width,
  height,
  fontSize,
  type,
  value,
  onClick,
  widthMax,
  minWidth,
  ...other
}) => {
  return (
    <ButtonStyled
      width={width}
      height={height}
      fontSize={fontSize}
      type={type}
      value={value}
      onClick={onClick}
      widthMax={widthMax}
      minWidth={minWidth}
      {...other}
    />
  );
};

export default Button;
