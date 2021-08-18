import * as S from "./styles";

const Input = ({
  value,
  event,
  width,
  height,
  placeholder,
  borderColor,
  colorPlaceholder,
  image,
  paddingLeft,
  onKeyUp,
}) => {
  return (
    <S.InputStyles
      value={value}
      onChange={event}
      width={width}
      height={height}
      placeholder={placeholder}
      borderColor={borderColor}
      colorPlaceholder={colorPlaceholder}
      image={image}
      paddingLeft={paddingLeft}
      onKeyUp={onKeyUp}
    />
  );
};

export default Input;
