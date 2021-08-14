import { useLocation, useHistory } from "react-router-dom";
import { LayoutComponent, Tag, Card } from "../../components";
import * as S from "./styles";
import { ongs } from "../../mocks/ongsData";
import { filters } from "../../mocks/filterData";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const searchByFilter = filters.find((ong) => {
    return ong.niche === query;
  });

  const filteredOngs = searchByFilter
    ? ongs.filter(({ niche }) => niche === searchByFilter.niche)
    : ongs.filter(
        (ong) =>
          ong.text.toLowerCase().includes(query.toLowerCase()) ||
          ong.title.toLowerCase().includes(query.toLowerCase())
      );

  const history = useHistory();

  function handleClick(ong) {
    history.push("/ong", ong);
  }

  return (
    <LayoutComponent>
      {searchByFilter && (
        <Tag
          bgColor={searchByFilter.bgColor}
          niche={searchByFilter.title}
          icon={searchByFilter.icon}
        />
      )}
      {filteredOngs.length > 0 ? (
        filteredOngs.map((ong) => (
          <Card
            onClick={() => handleClick(ong)}
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
