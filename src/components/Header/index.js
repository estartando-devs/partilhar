import * as S from "./styles";
import * as I from "../../assets/img";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <S.Container>
      <S.ContentHeader>
        <img src={I.logo} alt="Logo " />

        <p>Partilhar</p>
      </S.ContentHeader>
      <S.Menu>
        <S.Button onClick={() => setShowMenu((prev) => !prev)}>
          <img src={I.menu} alt="icone Menu" />
        </S.Button>
      </S.Menu>
    </S.Container>
  );
};
export default Header;
