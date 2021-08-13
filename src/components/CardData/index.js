import * as S from "./styles";

const CardBank = ({ title, children, bgColor }) => {
  return (
    <S.Container>
      <S.Content bgColor={bgColor}>
        <S.Title>{title}</S.Title>
        <S.ContainerData>{children}</S.ContainerData>
      </S.Content>
    </S.Container>
  );
};

export default CardBank;
