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
        />
      </S.Label>
    </S.Container>
  );
};

export default InputWithLabel;
