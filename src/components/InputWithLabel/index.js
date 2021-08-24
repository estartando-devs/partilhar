import * as S from "./styles";

const InputWithLabel = ({
  textLabel,
  placeholder,
  title,
  onChange,
  name,
  value,
  type,
  width,
  height,
  id,
  fontSize,
  fontWeight,
  ...other
}) => {
  return (
    <S.Container>
      <S.Label htmlFor={id || name} fontWeight={fontWeight}>
        {textLabel}
        <S.Input
          placeholder={placeholder}
          id={id || name}
          title={title}
          onChange={onChange}
          name={name}
          value={value}
          type={type || "text"}
          width={width}
          height={height}
          fontSize={fontSize}
          {...other}
        />
      </S.Label>
    </S.Container>
  );
};

export default InputWithLabel;
