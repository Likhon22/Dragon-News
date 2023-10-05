import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import news1 from "../../../assets/1.png";
import news2 from "../../../assets/2.png";
import news3 from "../../../assets/3.png";
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">All Caterogy</h2>
      <div className="flex flex-col gap-3 mt-4 pl-8">
        {categories.map((category) => (
          <NavLink className="block font-medium" key={category.id}>
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="mt-8 mb-20">
        <div>
          <img src={news1} alt="" />
          <h2 className="text-lg font-semibold mt-3">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex gap-6 mt-3">
            <p>Sports</p>
            <div className="flex gap-1 items-center font-medium text-gray-700">
              <AiOutlineCalendar></AiOutlineCalendar>
              <p>{moment().format(" MMM D, YYYY")}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <img src={news2} alt="" />
          <h2 className="text-lg font-semibold mt-3">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex gap-6 mt-3">
            <p>Sports</p>
            <div className="flex gap-1 items-center font-medium text-gray-700">
              <AiOutlineCalendar></AiOutlineCalendar>
              <p>{moment().format(" MMM D, YYYY")}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <img src={news3} alt="" />
          <h2 className="text-lg font-semibold mt-3">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex gap-6 mt-3">
            <p>Sports</p>
            <div className="flex gap-1 items-center font-medium text-gray-700">
              <AiOutlineCalendar></AiOutlineCalendar>
              <p>{moment().format(" MMM D, YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
