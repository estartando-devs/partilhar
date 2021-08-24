import * as S from "./styles";

const CardBank = ({ title, bgColor, children }) => {
  return (
    <S.Container>
      <S.Content bgColor={bgColor}>
        <S.Title>{title}</S.Title>
        {children}
      </S.Content>
    </S.Container>
  );
};

export default CardBank;
