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
}) => {
  return (
    <S.Container>
      <S.Label htmlFor={id || name}>
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
        />
      </S.Label>
    </S.Container>
  );
};

export default InputWithLabel;
