// import * as S from "./styles";
import * as S from "./styles";
import * as I from "../../assets/img/index";

const SideMenu = () => {
  return (
    <div>
      <S.Container>
        <S.Menu>
          <S.ItemMenu>
            <img src={I.arrow} alt="Seta" />
          </S.ItemMenu>
          <S.ItemMenu>
            <img src={I.home} alt="Icone home" />
            Home
          </S.ItemMenu>
          <S.ItemMenu>
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
          <S.ItemMenu>
            {" "}
            <img src={I.add} alt="Icone adicionar ong" />
            Área da ONG
          </S.ItemMenu>
        </S.Menu>
      </S.Container>
    </div>
  );
};

export default SideMenu;
