import * as S from "./styles";

const Description = ({ text }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Nossa história</S.Title>
        <S.Text>{text}</S.Text>
      </S.Content>
    </S.Container>
  );
};

export default Description;
