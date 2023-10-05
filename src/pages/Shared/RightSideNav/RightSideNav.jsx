import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const RightSideNav = () => {
  const { user } = useContext(AuthContext);
  const { google } = useContext(AuthContext);
  const handleMedia = (media) => {
    media()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {!user && (
        <div className="p-4 mb-6">
          <h2 className="text-xl font-semibold">Login With</h2>
          <button
            onClick={() => handleMedia(google)}
            className="btn outline text-cyan-400 w-full mt-4 outline-cyan-600"
          >
            <AiOutlineGoogle className="font-bold text-xl "></AiOutlineGoogle>
            Google
          </button>
          <button className="btn outline  w-full mt-4 ">
            <AiFillGithub className="font-bold text-xl"></AiFillGithub>
            Github
          </button>
        </div>
      )}
      <div className="p-4 mb-6">
        <h2 className="text-xl font-semibold">Find Us On</h2>
        <a
          className="flex items-center  border border-[#E7E7E7] p-4 rounded-t-lg gap-1 text-lg mt-4"
          href=""
        >
          <BiLogoFacebook className="border rounded-full text-blue-800"></BiLogoFacebook>
          <span className=" text-[#706F6F]">Facebook</span>
        </a>
        <a
          className="flex items-center border-x border-[#E7E7E7] p-4 gap-1 text-lg "
          href=""
        >
          <BiLogoInstagram className="border  rounded-full text-red-700"></BiLogoInstagram>
          <span className=" text-[#706F6F]">Instagram</span>
        </a>
        <a
          className="flex items-center border border-[#E7E7E7] p-4 rounded-b-lg gap-1 text-lg "
          href=""
        >
          <BiLogoTwitter className="border rounded-full text-cyan-400"></BiLogoTwitter>
          <span className=" text-[#706F6F]">Twitter</span>
        </a>
      </div>
      <div className="p-4 mb-6 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Q-ZONE</h2>
        <img src={qzone1} alt="" />
        <p></p>
        <img src={qzone2} alt="" />
        <p></p>
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
