import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCart from "./NewsCart";

const Home = () => {
  const news = useLoaderData();

  return (
    <div className="font-Poppins">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-2 ">
          {news.map((newsCart) => (
            <NewsCart key={newsCart.id} newsCart={newsCart}></NewsCart>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
