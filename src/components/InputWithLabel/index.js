import * as S from "./styles";

const InputWithLabel = ({
  textLabel,
  htmlFor,
  placeholder,
  id,
  title,
  onChange,
  name,
  value,
  type,
  width,
  height,
}) => {
  return (
    <S.Container>
      <S.Label htmlFor={htmlFor}>
        {textLabel}
        <S.Input
          placeholder={placeholder}
          id={id}
          title={title}
          onChange={onChange}
          name={name}
          value={value}
          type={type}
          width={width}
          height={height}
        />
      </S.Label>
    </S.Container>
  );
};

export default InputWithLabel;
