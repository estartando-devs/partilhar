import * as S from "./styles";
import * as I from "../../assets/img/index";

const SideMenu = ({ show, onClose }) => {
  return (
    <S.ContainerMenu show={show}>
      <S.Container show={show}>
        <S.Menu>
          <S.Arrow onClick={onClose}>
            <img src={I.arrow} alt="Seta" />
          </S.Arrow>
          <S.ItemMenu to="/">
            <img src={I.home} alt="Icone home" />
            Home
          </S.ItemMenu>
          <S.ItemMenu to="/busca">
            {" "}
            <img src={I.ongs} alt="Icone ongs" /> Ongs
          </S.ItemMenu>
          <S.ItemMenu>
            {" "}
            <img src={I.heart} alt="Icone coração" />
            Doadores destaque
          </S.ItemMenu>
          <S.ItemMenu>
            {" "}
            <img src={I.star} alt="Icone estrela" />
            Ongs destaque
          </S.ItemMenu>
          <S.ItemMenu>
            {" "}
            <img src={I.about} alt="Icone informação" />
            Sobre Nós
          </S.ItemMenu>
          <S.ItemMenu to="/login">
            {" "}
            <img src={I.add} alt="Icone adicionar ong" />
            Área da ONG
          </S.ItemMenu>
        </S.Menu>
      </S.Container>
    </S.ContainerMenu>
  );
};

export default SideMenu;
