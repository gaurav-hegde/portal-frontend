import React, { useState } from "react";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import InputBox from "../components/InputBox";
import {
  validEmail,
  validPhoneNumber,
  validRegNumber,
  validName,
} from "../RegEx";
import axios from "../api/axios";
import { useUserAuth } from "../context/UserAuthContext";
import notifications from "../components/notifications";
import { ToastContainer } from "react-toastify";

export default function CreateUser() {
  const [vitMail, setVitMail] = useState("");
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [regNoErr, setRegNoErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signUp, reset } = useUserAuth();

  const validate = () => {
    if (!validEmail.test(vitMail)) {
      setEmailErr(true);
    }
    if (!validPhoneNumber.test(phoneNumber)) {
      setPhoneErr(true);
    }
    if (!validRegNumber.test(regNo)) {
      setRegNoErr(true);
    }
    if (!validName.test(name)) {
      setNameErr(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.authorizedPost("/user/create", {
        vitMail,
        name,
        regNo,
        phoneNumber,
      });
      if (response.status === 201) {
        await signUp(vitMail, "123456");
        reset(vitMail);
      }
      notifications.success("User created successfully");
    } catch (error) {
      notifications.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <Sidebar />
      <Nav />
      <ToastContainer />
      <h2 className="text-[2rem] font-bold text-center text-blue pt-2 font-sans">
        Create User
      </h2>
      <form
        className="relative p-10 flex justify-center font-sans text-lg"
        onSubmit={handleSubmit}
      >
        <Loader loading={loading} />
        <div className="mt-3">
          <InputBox
            placeholder="Full Name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameErr && <p className="text-red">Your Name is invalid</p>}
          <InputBox
            placeholder="Email"
            label="VIT Email"
            value={vitMail}
            onChange={(e) => setVitMail(e.target.value)}
          />
          {emailErr && <p className="text-red">Your email is invalid</p>}
          <div className="lg:flex space-x-12">
            <div className="flex flex-col">
              <InputBox
                placeholder="Registration Number"
                label="VIT Reg No"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value.toUpperCase())}
              />
              {regNoErr && (
                <p className="text-red">Your Registration Number is invalid</p>
              )}
            </div>
            <div>
              <InputBox
                placeholder="Phone Number"
                label="Contact Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {phoneErr && (
                <p className="text-red">Your Phone Number is invalid</p>
              )}
            </div>
          </div>
          <div className="flex justify-center pt-6">
            <div className="p-2">
              <button
                type="submit"
                // onClick={validate}
                className="p-10 border w-full my-5 py-3 bg-blue text-white rounded-lg text-[1.1rem]"
              >
                Submit
              </button>
            </div>
            <div className="p-2">
              <button
                type="submit"
                className="p-10 border w-full my-5 py-3 bg-white  text-blue rounded-lg text-[1.1rem] "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
