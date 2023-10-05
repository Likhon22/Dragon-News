import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className=" btn btn-secondary">Breaking news</button>
      <Marquee speed={100} pauseOnHover={true}>
        <Link className="mr-10" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to="/" className="mr-10">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </Link>
        <Link className="mr-10" to="/">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
