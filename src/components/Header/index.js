import { useState } from "react";
import * as S from "./styles";
import * as I from "../../assets/img";
import SideMenu from "../SideMenu";
import Button from "../Button";
import Search from "../Search";
import theme from "../../styles/theme";

const Header = ({ dontShowSearch }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleSideMenu = (e) => {
    e.preventDefault();
    setShowMenu((prev) => !prev);
  };

  return (
    <S.Container>
      <S.ContentHeader>
        <S.ItemLink to="/" onClick={() => window.scrollTo(0, 0)}>
          <S.ImagemLogo src={I.logo} alt="Logo" />
        </S.ItemLink>

        <S.ContainerSearch>{!dontShowSearch && <Search />}</S.ContainerSearch>
      </S.ContentHeader>
      <S.ContainerMenu>
        <Button
          type="submit"
          onClick={toggleSideMenu}
          backgroundColor={theme.palette.text.light.primary}
          width="0"
          minWidth="0"
        >
          <S.Imagem src={I.menu} alt="Menu" />
        </Button>
      </S.ContainerMenu>
      <SideMenu show={showMenu} onClose={toggleSideMenu} />
    </S.Container>
  );
};

export default Header;
