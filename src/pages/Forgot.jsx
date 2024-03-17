import React from "react";
import loginImg from "../assets/login/LoginImage.svg";
import mailImg from "../assets/login/Mail.svg";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import Loader from "../components/Loader";

export default function Forgot1() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { reset } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await reset(email);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="absolute top-0 left-0 grid grid-cols-1 sm:grid-cols-5 bg-blue h-screen w-full">
      <div className=" sm:block col-span-3 ">
        <img className="w-3/4 h-full mx-auto" src={loginImg} alt="Login" />
      </div>

      <div className="relative bg-white flex flex-col justify-center font-sans col-span-2">
        <Loader loading={loading} />
        <form
          onSubmit={handleSubmit}
          className="max-w-[18rem] sm:max-w-[22rem] w-full mx-auto bg-white p-4"
        >
          <h2 className="text-[2rem] font-extrabold text-center pb-1 sm:pb-6 text-blue ">
            STC PORTAL
          </h2>
          <h3 className="text-[1.3rem] font-semibold text-center pb-2 sm:pb-12 text-blue ">
            Forgot Password
          </h3>
          <h4 className="text-center text-[1rem] p-1">Enter your VIT Email</h4>
          <div className="flex flex-row py-2">
            <input
              className="focus:ring-0 focus:border-blue border-gray-dark border-t-0 border-r-0 border-l-0 border-b-2 w-full p-1"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{error}</p>
            <img
              className=" border-gray-dark border-b-2"
              src={mailImg}
              alt="Person Icon"
            />
          </div>
          <button
            type="submit"
            className="border w-full my-5 py-3 bg-blue hover:bg-indigo-500 text-white rounded-lg text-[1.1rem] font-semibold"
          >
            Send me the Link
          </button>
        </form>
      </div>
    </div>
  );
}
