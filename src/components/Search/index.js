import { useState } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import Input from "../Input";
import * as I from "../../assets/img";
import Button from "../Button";
import theme from "../../styles/theme";

const Search = () => {
  const [search, setSearch] = useState("");

  const history = useHistory();

  const handleClick = () => {
    history.push(`/busca?q=${search}`);
  };

  return (
    <S.Container>
      <Input
        width="177px"
        height="31px"
        placeholder="Pesquisar..."
        borderColor={theme.palette.primary}
        colorPlaceholder="#84A59D"
        image={I.lupa}
        paddingLeft="50px"
        value={search}
        event={(ev) => setSearch(ev.target.value)}
      />

      <Button
        width="90px"
        height="31px"
        fontSize="13px"
        type="submit"
        color={theme.palette.text.light.primary}
        backgroundColor={theme.palette.primary}
        onClick={handleClick}
      >
        Buscar
      </Button>
    </S.Container>
  );
};

export default Search;
