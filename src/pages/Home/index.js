import {
  Donors,
  FilterCard,
  Highlights,
  LayoutComponent,
} from "../../components";

const Home = () => {
  return (
    <LayoutComponent>
      <FilterCard />
      <Highlights />
      <Donors />
    </LayoutComponent>
  );
};

export default Home;
