import * as S from "./styles";
import * as I from "../../assets/img/index";

const SideMenu = ({ show, onClose }) => {
  return (
    <S.Overlay show={show} onClick={onClose}>
      <S.Container show={show} onClick={(e) => e.stopPropagation()}>
        <S.Menu>
          <S.Button onClick={onClose}>X</S.Button>
          <S.ItemMenu to="/">
            <S.Imagem src={I.home} alt="Icone home" />
            Home
          </S.ItemMenu>
          <S.ItemMenuDesktop to="/">ONGs</S.ItemMenuDesktop>
          <S.ItemMenu to="/">
            <S.Imagem src={I.about} alt="Icone informação" />
            Sobre Nós
          </S.ItemMenu>
          <S.ItemMenuDesktop to="/">Contato</S.ItemMenuDesktop>
          <S.ItemMenu to="/login">
            <S.Imagem src={I.add} alt="Icone adicionar ong" />
            Área da ONG
          </S.ItemMenu>
          {/* ------------------------- */}
        </S.Menu>
      </S.Container>
    </S.Overlay>
  );
};

export default SideMenu;
