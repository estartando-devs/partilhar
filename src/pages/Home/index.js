import React from "react";
import { Donors, FilterCard, LayoutComponent, Search } from "../../components";

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
