import { Input } from "../Input/styles";
import * as I from "../../assets/img";
import { Button } from "../Button/styles";
import * as S from "./styles";

const Search = () => {
  return (
    <S.Container>
      <Input
        width="177px"
        height="31px"
        placeholder="Pesquisar..."
        borderColor="#5A7770"
        colorPlaceholder="#84A59D"
        image={I.lupa}
        paddingLeft="50px"
      />
      ,
      <Button
        width="90px"
        height="31px"
        backgroundColor="theme.palette.primary"
      >
        Buscar
      </Button>
    </S.Container>
  );
};

export default Search;
