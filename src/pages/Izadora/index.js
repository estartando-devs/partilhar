import React from "react";

import { LayoutComponent, Donors, Card } from "../../components";

const Izadora = () => {
  return (
    <LayoutComponent>
      <div style={{ minHeight: "70vh" }}>
        <Donors />
        <Card />
      </div>
    </LayoutComponent>
  );
};

export default Izadora;
