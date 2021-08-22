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
    if (search) history.push(`/busca?q=${search}`);
  };

  return (
    <S.Container>
      <Input
        placeholder="Pesquisar..."
        borderColor={theme.palette.primary}
        colorPlaceholder="#84A59D"
        image={I.magnifier}
        paddingLeft="32px"
        value={search}
        event={(ev) => setSearch(ev.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleClick()}
      />

      <Button
        width="32%"
        height="100%"
        fontSize="0.8rem"
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
