import * as S from "./styles";

const Tag = ({ bgColor, niche, icon }) => {
  return (
    <S.Container>
      <S.Content backgroundColor={bgColor}>
        <S.Imagem src={icon} alt={niche} />
        <S.Text>{niche}</S.Text>
      </S.Content>
    </S.Container>
  );
};

export default Tag;
