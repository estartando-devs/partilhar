import React from "react";
import {
  Donors,
  FilterCard,
  Highlights,
  LayoutComponent,
  Search,
} from "../../components";

const Home = () => {
  return (
    <LayoutComponent>
      <Search />
      <FilterCard />
      <Highlights />
      <Donors />
    </LayoutComponent>
  );
};

export default Home;
