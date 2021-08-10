import { useHistory } from "react-router-dom";
import * as S from "./styles";
import { filters } from "../../useful/filterData";

const FilterCard = () => {
  const history = useHistory();

  const handleClick = (valor) => {
    history.push(`/busca?q=${valor}`);
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
            onClick={() => handleClick(filter.title)}
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
