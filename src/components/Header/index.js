import { useLocation } from "react-router-dom";
import { useState } from "react";
import * as S from "./styles";
import * as I from "../../assets/img";
import SideMenu from "../SideMenu";
import Button from "../Button";
import Search from "../Search";
import theme from "../../styles/theme";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  console.log(query);

  const toggleSideMenu = (e) => {
    e.preventDefault();
    setShowMenu((prev) => !prev);
  };
  return (
    <S.Container>
      <S.ContentHeader>
        <S.ImagemLogo src={I.logo} alt="Logo" />
        <S.ContainerSearch>
          <Search value={query} />
        </S.ContainerSearch>
      </S.ContentHeader>
      <S.ContainerMenu>
        <Button
          type="submit"
          onClick={toggleSideMenu}
          backgroundColor={theme.palette.text.light.primary}
        >
          <S.Imagem src={I.menu} alt="Menu" />
        </Button>
      </S.ContainerMenu>
      <SideMenu show={showMenu} onClose={toggleSideMenu} />
    </S.Container>
  );
};

export default Header;
