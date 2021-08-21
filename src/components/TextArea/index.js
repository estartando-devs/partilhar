import * as S from "./styles";

const TextArea = ({
  placeholder,
  onChange,
  maxLength,
  name,
  value,
  width,
  height,
}) => {
  return (
    <S.Container>
      <S.TextArea
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        name={name}
        value={value}
        width={width}
        height={height}
      />
    </S.Container>
  );
};

export default TextArea;
