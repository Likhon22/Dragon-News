import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { register } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    register(email, password)
      .then((res) => {
        console.log(res);
        toast.success("You are sigend up");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("cant");
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <div className="text-center lg:py-36 bg-white">
          <h2 className="text-3xl font-bold">Register your account</h2>
          <form onSubmit={handleSubmit} className="md:w-3/4 lg:w-1/3 mx-auto">
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo</span>
              </label>
              <input
                type="text"
                placeholder="Your Photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary bg-gray-700  border-none"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-4">
            Already have an account?Please{" "}
            <Link
              className="text-blue-600 border-b-blue-600 border-b"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
