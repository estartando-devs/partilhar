import * as S from "./styles";

const Description = ({ title, text }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default Description;
