import { useHistory } from "react-router-dom";
import * as S from "./styles";
import { filters } from "../../mocks/filterData";

const FilterCard = () => {
  const history = useHistory();

  const handleClick = (value) => {
    history.push(`/busca?q=${value}`);
  };

  return (
    <S.Container>
      <S.Titulo>
        Escolha uma <S.TextStrong>ONG</S.TextStrong> para doar:
      </S.Titulo>
      <S.ContainerCausa>
        {filters.map((filter) => (
          <S.Filter
            type="submit"
            key={filter.value}
            bgColor={filter.bgColor}
            onClick={() => handleClick(filter.niche)}
          >
            <S.Imagem src={filter.icon} alt={filter.title} />
            <S.TextFilter>{filter.title}</S.TextFilter>
          </S.Filter>
        ))}
      </S.ContainerCausa>
    </S.Container>
  );
};
export default FilterCard;
