import React, { useEffect, useState } from "react";
import loginImg from "../assets/login/LoginImage.svg";
import personImg from "../assets/login/LoginPerson.svg";
import Visible from "../assets/login/Visible.svg";
import NotVisible from "../assets/login/NotVisible.svg";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { validEmail } from "../RegEx";
import Loader from "../components/Loader";
import { ToastContainer } from "react-toastify";
import notifications from "../components/notifications";

export default function Login() {
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, signIn } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate("/home");
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailErr(true);
    if (!validate(email)) return;
    setLoading(true);
    setEmailErr(false);
    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      notifications.error(e.message);
    }
    setLoading(false);
  };

  const validate = () => {
    return validEmail.test(email);
  };

  return (
    <>
      <ToastContainer />
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
              Login
            </h3>
            <h4 className="text-center text-[1rem]">Enter your VIT Email</h4>
            <div className="flex flex-row py-2">
              <input
                className="focus:ring-0 focus:border-blue border-gray-dark border-t-0 border-r-0 border-l-0 border-b-2 w-full p-1"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <img
                className=" border-gray-dark border-b-2"
                src={personImg}
                alt="Person Icon"
              />
            </div>
            {emailErr && <p className="text-red">Your email is invalid</p>}
            <div className="flex flex-row py-2">
              <input
                className="focus:ring-0 focus:border-blue border-gray-dark border-t-0 border-r-0 border-l-0 border-b-2 p-1 w-full"
                type={passwordType}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="border-gray-dark border-b-2"
                onClick={togglePassword}
              >
                {passwordType === "password" ? (
                  <img src={Visible} alt="Eye Icon" />
                ) : (
                  <img src={NotVisible} alt="Open Eye Icon" />
                )}
              </div>
            </div>
            <Link to="/forgot">
              <p className="text-sm text-blue pt-2 pb-5 sm:pb-10">
                Forgot Password?
              </p>
            </Link>
            <button
              onClick={handleSubmit}
              type="submit"
              className="border w-full my-5 py-3 bg-blue hover:bg-indigo-500 text-white rounded-lg text-[1.1rem] font-semibold"
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
