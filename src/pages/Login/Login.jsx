import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    login(email, password)
      .then((res) => {
        console.log(res);
        toast.success("You are log in to your account");
        navigate(location?.state ? location.state : "/");
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
          <h2 className="text-3xl font-bold">Login your account</h2>
          <form onSubmit={handleSubmit} className="md:w-3/4 lg:w-1/3 mx-auto">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary bg-gray-700  border-none"
              >
                Login
              </button>
            </div>
          </form>
          <h3 className="mt-4">
            Dont’t Have An Account ?{" "}
            <Link
              state={location.pathname}
              to="/register"
              className="text-blue-600 border-b-blue-600 border-b"
            >
              Register
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
