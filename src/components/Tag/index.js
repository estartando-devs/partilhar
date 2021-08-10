import * as S from "./styles";
import { filters } from "../../mocks/filterData";

const Tag = () => {
  const query = new URLSearchParams(window.location.search).get("q");

  const causa = filters.find((ong) => {
    return ong.title === query;
  });

  return (
    <S.Container>
      {causa && (
        <S.Content backgroundColor={causa.bgColor} key={causa.value}>
          <S.Imagem src={causa.icon} alt="Mulher" />
          <S.Text>{causa.title}</S.Text>
        </S.Content>
      )}
    </S.Container>
  );
};

export default Tag;
