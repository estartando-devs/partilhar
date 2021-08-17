import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import * as I from "../../assets/img";
import SideMenu from "../SideMenu";
import Button from "../Button";
import Search from "../Search";
import theme from "../../styles/theme";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleSideMenu = (e) => {
    e.preventDefault();
    setShowMenu((prev) => !prev);
  };
  return (
    <S.Container>
      <S.ContentHeader>
        <Link to="/">
          <S.ImagemLogo src={I.logo} alt="Logo" />
        </Link>

        <S.ContainerSearch>
          <Search />
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
