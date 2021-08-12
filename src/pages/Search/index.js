import React from "react";
import { Card, LayoutComponent, Tag } from "../../components";
import { ongs } from "../../mocks/ongsData";

const Search = () => {
  return (
    <LayoutComponent>
      <Tag />
      {ongs.map((ong) => (
        <Card key={ong.value} img={ong.img} title={ong.title} text={ong.text} />
      ))}
    </LayoutComponent>
  );
};

export default Search;
