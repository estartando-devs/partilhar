import * as S from "./styles";

import { addressData } from "../../mocks/addressData";
import { CardData } from "../../components";

const Dandara = () => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

export default Dandara;
