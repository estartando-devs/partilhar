import { InputWithLabel } from "../../../../components";
import {
  facebookBlack,
  instagramBlack,
  linkedIn,
  twitter,
} from "../../../../assets/img";
import * as S from "./styles";

const SocialNetworksData = [
  {
    textLabel: "Facebook",
    name: "facebook",
    img: facebookBlack,
  },
  {
    textLabel: "Instagram",
    name: "instagram",
    img: instagramBlack,
  },
  {
    textLabel: "LinkedIn",
    name: "linkedin",
    img: linkedIn,
  },
  {
    textLabel: "Twitter",
    name: "twitter",
    img: twitter,
  },
];

const SocialNetworks = ({ values, setValues }) => {
  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <S.Container>
      <S.Title>5. Redes Sociais</S.Title>
      {SocialNetworksData.map((item) => (
        <S.InputContainer key={item.name}>
          <S.Icon src={item.img} />
          <InputWithLabel
            textLabel={item.textLabel}
            placeholder="Adicionar link"
            onChange={onChange}
            name={item.name}
            value={values[item.name]}
            width=" 90%"
          />
        </S.InputContainer>
      ))}
    </S.Container>
  );
};

export default SocialNetworks;
