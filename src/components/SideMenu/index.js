import { logout } from "../../services/auth.service";

import * as S from "./styles";
import * as I from "../../assets/img/index";

const SideMenu = ({ show, onClose }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <S.Overlay show={show} onClick={onClose}>
      <S.Container show={show} onClick={(e) => e.stopPropagation()}>
        <S.Menu>
          <S.Button onClick={onClose}>X</S.Button>
          <S.ItemMenu to="/">
            <S.Imagem src={I.home} alt="Icone home" />
            Home
          </S.ItemMenu>
          <S.ItemMenuDesktop to="/busca"> ONGs </S.ItemMenuDesktop>
          <S.ItemMenu to="/sobre">
            <S.Imagem src={I.about} alt="Icone informação" />
            Sobre Nós
          </S.ItemMenu>

          <S.ItemMenu to={user ? "/perfil" : "/login"}>
            <S.Imagem src={I.add} alt="Icone adicionar ong" />
            Área da ONG
          </S.ItemMenu>

          {user && (
            <S.ItemMenu to="/login" onClick={logout}>
              <S.Imagem src={I.logout} alt="Icone adicionar ong" />
              Deslogar
            </S.ItemMenu>
          )}
        </S.Menu>
      </S.Container>
    </S.Overlay>
  );
};

export default SideMenu;
