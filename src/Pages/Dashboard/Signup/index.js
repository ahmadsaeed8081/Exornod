import { useState } from "react";
import Layout from "../../../routes/Layout";

const Signup = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    referralCode: "",
  });
  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className="bg-[#101010] min-h-screen flex justify-center items-center">
        <form className="bg-[#101010] p-5 w-10/12 sm:w-10/12 md:w-10/12 lg:w-2/4 rounded">
          <h3 className="zen-dots mb-8 text-themeColor capitalize font font-bold text-3xl text-center">
            Sign up1
          </h3>

          <div className="mb-5 mt-8 flex flex-col gap-2">
            <label className="text-white text-base font-light">User Name</label>
            <input
              type="text"
              name="name"
              className="w-full bg-white p-3 rounded-xl outline-none text-black1"
              onChange={handleInputs}
              value={state.name}
              placeholder="Enter Your User Name"
            />
          </div>
          <div className="mb-5 flex flex-col gap-2">
            <label className="text-white text-base font-light">Email</label>
            <input
              type="text"
              name="email"
              className="w-full bg-white p-3 rounded-xl outline-none text-black1"
              onChange={handleInputs}
              value={state.email}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-5 flex flex-col gap-2">
            <label className="text-white text-base font-light">
              Referral Code
            </label>
            <input
              type="text"
              name="referralCode"
              className="w-full bg-white p-3 rounded-xl outline-none text-black1"
              onChange={handleInputs}
              value={state.referralCode}
              placeholder="Enter Referral Code"
            />
          </div>

          <div className="mt-10">
            <input
              type="submit"
              value={"SIGN Up"}
              className="bg-themeColor zen-dots w-full p-3 rounded-xl text-black uppercase font-semibold cursor-pointer"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
