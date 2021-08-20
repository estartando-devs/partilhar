import { Link } from "react-router-dom";
import * as S from "./styles";
import * as I from "../../assets/img";

const Footer = () => {
  return (
    <S.ContainerFooter>
      <S.Container>
        <Link to="/">
          <S.ContainerLogo alt="White Logo" src={I.whitelogo} />
        </Link>
        <S.ContainerMenu>
          <S.TitleMenu to="/">Home</S.TitleMenu>
          <S.TitleMenu to="/">Contato</S.TitleMenu>
          <S.TitleMenu to="/sobre">Sobre</S.TitleMenu>
        </S.ContainerMenu>
      </S.Container>

      <S.ContainerInformation>
        <S.TitleInformation>
          &copy; 2021. Todos os direitos reservados.
        </S.TitleInformation>

        <S.ContainerImg>
          <S.BoxImg alt="WhatsApp" src={I.whatsapp} />
          <S.BoxImg alt="Facebook" src={I.facebook} />
          <S.BoxImg alt="Instagram" src={I.instagram} />
        </S.ContainerImg>
      </S.ContainerInformation>
    </S.ContainerFooter>
  );
};
export default Footer;
