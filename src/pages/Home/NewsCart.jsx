import { AiOutlineShareAlt } from "react-icons/ai";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const NewsCart = ({ newsCart }) => {
  const { author, image_url, title, details, _id } = newsCart;
  return (
    <div className="mt-6 mx-6 t">
      <div className="bg-gray-300 flex items-center py-4 gap-2 mb-6 px-6 justify-between">
        <div className=" flex items-center gap-2">
          <img
            className=" w-[40px] h-[40px] rounded-full"
            src={author?.img}
            alt=""
          />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <AiOutlineShareAlt></AiOutlineShareAlt>
          <BsFillBookmarkDashFill></BsFillBookmarkDashFill>
        </div>
      </div>
      <h2 className="text-lg  font-bold mb-4">{title}</h2>
      <img className="w-[500px] mx-auto h-[260px]" src={image_url} alt="" />
      <div className="mt-4">
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link to={`/news/${_id}`} className="text-amber-600 font-medium">
              {" "}
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCart;
