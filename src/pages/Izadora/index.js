import React from "react";
import { LayoutComponent, Donors, Card } from "../../components";
import * as I from "../../assets/img";

const Izadora = () => {
  return (
    <LayoutComponent>
      <div style={{ minHeight: "70vh" }}>
        <Donors />
        <Card
          img={I.ongcard}
          title="Ong Wonder"
          text=" Somos uma ong especializada em cuidados com mulheres vítimas de abusos  psicológicosm onde de forma cultural e dinâmica as mesmas encaram seus medos e adquirem novas metas e desejos para o futuro. Um lugar construído com apoio e amor."
        />
        <Card
          img={I.ongcard}
          title="Ong Criança"
          text=" hf98hydefaewfpoujgfvpoa"
        />
      </div>
    </LayoutComponent>
  );
};

export default Izadora;
