import * as S from "./styles";
import * as I from "../../assets/img/index";

const SideMenu = ({ show, onClose }) => {
  return (
    <S.ContainerMenu show={show}>
      <S.Container show={show}>
        <S.Menu>
          <S.Arrow onClick={onClose}>
            <S.Imagem src={I.arrow} alt="Seta" />
          </S.Arrow>
          <S.ItemMenu to="/">
            <S.Imagem src={I.home} alt="Icone home" />
            Home
          </S.ItemMenu>
          <S.ItemMenu to="/">
            {" "}
            <S.Imagem src={I.ongs} alt="Icone ongs" />
            Ongs
          </S.ItemMenu>
          <S.ItemMenu to="/">
            {" "}
            <S.Imagem src={I.heart} alt="Icone coração" />
            Doadores destaque
          </S.ItemMenu>
          <S.ItemMenu to="/">
            {" "}
            <S.Imagem src={I.star} alt="Icone estrela" />
            Ongs destaque
          </S.ItemMenu>
          <S.ItemMenu to="/">
            {" "}
            <S.Imagem src={I.about} alt="Icone informação" />
            Sobre Nós
          </S.ItemMenu>
          <S.ItemMenu to="/login">
            {" "}
            <S.Imagem src={I.add} alt="Icone adicionar ong" />
            Área da ONG
          </S.ItemMenu>
        </S.Menu>
      </S.Container>
    </S.ContainerMenu>
  );
};

export default SideMenu;
