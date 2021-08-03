import { ButtonStyled } from "./styles";

const Button = ({ width, height, fontSize, type, value }) => {
  return (
    <ButtonStyled
      width={width}
      height={height}
      fontSize={fontSize}
      type={type}
      value={value}
    />
  );
};

export default Button;
