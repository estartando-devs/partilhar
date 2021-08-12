import React from "react";
import { Card, LayoutComponent } from "../../components";
import * as I from "../../assets/img";

const Izadora = () => {
  return (
    <LayoutComponent>
      <Card
        img={I.ongcard}
        title="Ong Wonder"
        text=" Somos uma ong especializada em cuidados com mulheres vítimas de abusos  psicológicosm onde de forma cultural e dinâmica as mesmas encaram seus medos e adquirem novas metas e desejos para o futuro. Um lugar construído com apoio e amor."
      />
    </LayoutComponent>
  );
};

export default Izadora;
