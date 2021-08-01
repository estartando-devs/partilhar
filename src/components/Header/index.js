import { useState } from "react";
import * as S from "./styles";
import * as I from "../../assets/img";
import SideMenu from "../SideMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleSideMenu = (e) => {
    e.preventDefault();
    setShowMenu((prev) => !prev);
  };
  return (
    <S.Container>
      <S.ContentHeader>
        <img src={I.logo} alt="Logo " />
      </S.ContentHeader>
      <S.ContainerMenu>
        <button type="submit" onClick={toggleSideMenu}>
          <img src={I.menu} alt="icone Menu" />
        </button>
      </S.ContainerMenu>
      <SideMenu show={showMenu} onClose={toggleSideMenu} />
    </S.Container>
  );
};
export default Header;
