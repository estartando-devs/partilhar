import * as S from "./styles";

const Description = ({ title, text }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.Content>
    </S.Container>
  );
};

export default Description;
