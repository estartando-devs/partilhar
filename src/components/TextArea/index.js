import * as S from "./styles";

const TextArea = ({
  placeholder,
  onChange,
  maxLength,
  name,
  value,
  width,
  height,
  textLabel,
  borderColor,
  widthMedia,
  ...rest
}) => {
  return (
    <S.Container>
      <S.Label>{textLabel}</S.Label>
      <S.TextArea
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        name={name}
        value={value}
        width={width}
        height={height}
        borderColor={borderColor}
        widthMedia={widthMedia}
        {...rest}
      />
    </S.Container>
  );
};

export default TextArea;
