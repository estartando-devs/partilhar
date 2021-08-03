import { Link } from "react-router-dom";
import { useState } from "react";
import * as S from "./styles";
import Input from "../Input";
import * as I from "../../assets/img";
import Button from "../Button";

const Search = () => {
  const [search, setSearch] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setSearch("");
  }

  return (
    <S.Container onSubmit={onSubmit}>
      <Input
        width="177px"
        height="31px"
        placeholder="Pesquisar..."
        borderColor="#5A7770"
        colorPlaceholder="#84A59D"
        image={I.lupa}
        paddingLeft="50px"
        value={search}
        event={(ev) => setSearch(ev.target.value)}
      />
      <Link to={`/busca=${search}`}>
        <Button
          width="90px"
          height="31px"
          fontSize="13px"
          type="submit"
          value="Buscar"
        />
      </Link>
    </S.Container>
  );
};

export default Search;
