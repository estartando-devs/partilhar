import React from "react";
import { Donors, FilterCard, LayoutComponent, Search } from "../../components";
// import * as S from "./styles";

const Home = () => {
  return (
    <LayoutComponent>
      <Search />
      <FilterCard />
      <Donors />
    </LayoutComponent>
  );
};

export default Home;
