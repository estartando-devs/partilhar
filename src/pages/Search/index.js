import { useLocation } from "react-router-dom";
import { LayoutComponent, Tag, Card } from "../../components";
import * as S from "./styles";
import { ongs } from "../../mocks/ongsData";

const Search = () => {
  const location = useLocation();
  const filter = location.state;
  const filteredOngs =
    filter && ongs.filter(({ niche }) => niche === filter.niche);

  return (
    <LayoutComponent>
      {filter && (
        <Tag bgColor={filter.bgColor} niche={filter.title} icon={filter.icon} />
      )}
      {filteredOngs.length > 0 ? (
        filteredOngs.map((ong) => (
          <Card
            key={ong.value}
            img={ong.img}
            title={ong.title}
            text={ong.text}
          />
        ))
      ) : (
        <S.NotFound>
          <S.Text>Nenhuma ong encontrada</S.Text>
        </S.NotFound>
      )}
    </LayoutComponent>
  );
};

export default Search;
