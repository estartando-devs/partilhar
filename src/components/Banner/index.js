import * as S from "./styles";
import * as I from "../../assets/img";

const Banner = ({ title, img }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{title}</S.Title>

        <S.ContainerIcon>
          <S.Icon src={I.whatsappGreen} alt="Facebook" />
          <S.Icon src={I.facebookGreen} alt="Facebook" />
          <S.Icon src={I.instagramGreen} alt="Instagram" />
        </S.ContainerIcon>

        <S.Img src={img} />
      </S.Content>
    </S.Container>
  );
};

export default Banner;
