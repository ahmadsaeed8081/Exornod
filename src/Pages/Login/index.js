import { useState, useEffect } from "react";
import { useUserLoginMutation } from "../../store/services/authService";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setUserToken } from "../../store/reducers/authReducer";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const adminLoginFunction = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-themeColor h-screen flex justify-center items-center">
      <form
        className="bg-purple p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 rounded"
        onSubmit={adminLoginFunction}
      >
        <h3 className="mb-4 text-white capitalize font font-bold text-lg">
          User login
        </h3>

        <div className="mb-4 mt-4">
          <input
            type="email"
            name="email"
            className="w-full bg-white p-4 rounded outline-none text-black1"
            onChange={handleInputs}
            value={state.email}
            placeholder="Enter email..."
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            className="w-full bg-white p-4 rounded outline-none text-black1"
            onChange={handleInputs}
            value={state.password}
            placeholder="Enter password..."
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value={"sign in"}
            className="bg-brown w-full p-4 rounded text-white uppercase font-semibold cursor-pointer"
          />
        </div>
        <div className="mb-4 flex items-center justify-end w-full">
          <Link
            to="/auth/register"
            className="text-white capitalize font font-medium text-lg cursor-pointer hover:underline"
          >
            New Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
