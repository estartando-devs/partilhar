/* eslint-disable */
import { useEffect, useState } from "react";

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
  const [networks, setNetworks] = useState(values.networks || {});

  function onChange(e) {
    const { name, value } = e.target;
    setNetworks({ ...networks, [name]: value });
  }

  useEffect(() => {
    setValues((prev) => ({ ...prev, networks: networks }));
  }, [networks]);

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
            value={values.networks ? values.networks[item.name] : ""}
            width=" 90%"
          />
        </S.InputContainer>
      ))}
    </S.Container>
  );
};

export default SocialNetworks;
