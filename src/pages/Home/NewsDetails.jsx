import { Link, useLoaderData, useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const currentDetails = details.filter((newsDetail) => newsDetail._id === id);

  console.log(currentDetails);
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="grid grid-cols-4 gap-6 mt-6">
        <div className="col-span-3 ml-8">
          <h2 te className="text-lg ml-20 font-bold my-4">
            {" "}
            Dragon News
          </h2>
          {currentDetails.map((detail) => (
            <div className="text-center">
              <img
                className="w-[700px] h-[400px] mx-auto"
                src={detail.thumbnail_url}
                alt=""
              />
              <h2 className="text-lg  font-bold my-4">{detail.title}</h2>
              <p>{detail.details}</p>
              <Link to="/">
                {" "}
                <button className="btn btn-secondary mt-6 w-1/2">
                  All news in this category
                </button>
              </Link>
            </div>
          ))}
        </div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default NewsDetails;
