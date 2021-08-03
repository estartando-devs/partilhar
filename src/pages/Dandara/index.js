import React from "react";
import { search } from "../../assets/img";
import { Input } from "../../components/Input/styles";

const Dandara = () => {
  return (
    <Input
      width="177px"
      height="31px"
      placeholder="Pesquisar..."
      borderColor="#5A7770"
      colorPlaceholder="#84A59D"
      image={search}
      paddingLeft="50px"
    />
  );
};

export default Dandara;
