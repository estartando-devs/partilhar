import { useLocation } from "react-router-dom";
import * as S from "./styles";
import * as I from "../../assets/img";
import {
  LayoutComponent,
  Banner,
  Description,
  Tag,
  Slide,
  CardData,
} from "../../components";

const OngDetails = () => {
  const location = useLocation();
  const ong = location.state;

  return (
    <>
      <LayoutComponent>
        <Tag bgColor={ong.bgColor} niche={ong.niche} icon={ong.icon} />
        <Banner title={ong.title} img={ong.img} />

        <Description text={ong.text} />

        <Slide>
          <S.Image src={I.photoone} alt="foto 1" />
          <S.Image src={I.phototwo} alt="foto 2" />
        </Slide>

        <CardData title="Seja um doador!" bgColor={ong.bgColor}>
          <S.Border>
            <S.SubTitle>{ong.bank}</S.SubTitle>
            <S.ContentData>
              <S.Data>
                <S.TextHeader>Agência:</S.TextHeader>
                <S.TextHeader>Conta</S.TextHeader>
                <S.TextHeader>CNPJ:</S.TextHeader>
              </S.Data>
              <S.Data>
                <S.Text>{ong.agency}</S.Text>
                <S.Text>{ong.account}</S.Text>
                <S.Text>{ong.cnpj}</S.Text>
              </S.Data>
            </S.ContentData>
          </S.Border>
          <S.Border>
            <S.ContentData>
              <S.Data>
                <S.TextHeader>Chave Pix:</S.TextHeader>
              </S.Data>
              <S.Data>
                <S.Text>{ong.pix}</S.Text>
              </S.Data>
            </S.ContentData>
          </S.Border>
        </CardData>

        <CardData title="Seja voluntário" bgColor={ong.bgColor}>
          <S.Border>
            <S.ContentData gap="10px">
              <S.Data>
                <S.TextHeader>Endereço:</S.TextHeader>
                <S.TextHeader width="80px">
                  Horário de funcionamento:
                </S.TextHeader>
                <S.TextHeader>Telefone:</S.TextHeader>
                <S.TextHeader>Redes sociais:</S.TextHeader>
              </S.Data>
              <S.Data>
                <S.Text>{ong.address}</S.Text>
                <S.Text>{ong.time}</S.Text>
                <S.Text>{ong.phone}</S.Text>
                <S.Text>{ong.networks}</S.Text>
              </S.Data>
            </S.ContentData>
          </S.Border>
        </CardData>
      </LayoutComponent>
    </>
  );
};

export default OngDetails;
