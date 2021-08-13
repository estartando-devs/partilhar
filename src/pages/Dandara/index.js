// import * as S from "./styles";
import { Banner } from "../../components";
// import { addressData } from "../../mocks/addressData";
import * as I from "../../assets/img";

const Dandara = () => {
  return (
    <>
      {/* <S.Container>
      {addressData.map((data) => (
        <CardData
          key={data.index}
          title="Seja Voluntário"
          bgColor={data.bgColor}
        >
          <S.Text>{data.address}</S.Text>
          <S.Text>{data.time}</S.Text>
          <S.Text>{data.phone}</S.Text>
          <S.Text>{data.networks}</S.Text>
        </CardData>
      ))}
    </S.Container> */}

      <Banner title="Ong Wonder" img={I.banner} />
      {/* <Description
        title="Nossa história"
        text="Somos uma ong especializada em cuidados com mulheres vítimas de abusos
        psicológicosm onde de forma cultural e dinâmica as mesmas encaram seus
        medos e adquirem novas metas e desejos para o futuro. Um lugar
        construído com apoio e amor."
      />
      <Slide>
        <S.Imagem src={I.photoone} />
        <S.Imagem src={I.phototwo} />
      </Slide> */}
    </>
  );
};

export default Dandara;
