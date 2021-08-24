import Border from "../Border";
import * as S from "./styles";
import * as I from "../../assets/img";

const AboutUs = () => {
  return (
    <S.Container>
      <S.Content>
        <Border>
          <S.Box>
            <S.Title>Sobre Nós</S.Title>
            <S.TextContent>
              Partilhar nasceu com o objetivo de ser uma ponte entre as ONGs e
              os doadores, dando visibilidade as organizações não governamentais
              idôneas e pessoas físicas ou jurídicas que buscam fazer o seu
              papel social.
            </S.TextContent>
            <S.Image src={I.childs} />
            <S.QuoteText>
              “Você não pode mudar o mundo, mas pode mudar o mundo de alguém.”
            </S.QuoteText>
          </S.Box>
        </Border>
      </S.Content>
    </S.Container>
  );
};
export default AboutUs;
