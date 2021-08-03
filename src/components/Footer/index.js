import * as S from "./styles";
import * as I from "../../assets/img";

const Footer = () => {
  return (
    <S.ContainerFooter>
      <S.ContainerLogo>
        <img alt="White Logo" src={I.whitelogo} />
      </S.ContainerLogo>

      <S.ContainerInformation>
        <S.TitleInformation>
          © 2021. Todos os direitos reservados.
        </S.TitleInformation>
        <S.ContainerImg>
          <img alt="WhatsApp" src={I.whatsapp} />
          <img alt="Facebook" src={I.facebook} />
          <img alt="Instagram" src={I.instagram} />
        </S.ContainerImg>
      </S.ContainerInformation>
    </S.ContainerFooter>
  );
};
export default Footer;
