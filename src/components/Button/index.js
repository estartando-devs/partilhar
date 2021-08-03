import { ButtonStyled } from "./styles";

const Button = ({
  width,
  height,
  fontSize,
  type,
  value,
  onClick,
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
      {...other}
    />
  );
};

export default Button;
