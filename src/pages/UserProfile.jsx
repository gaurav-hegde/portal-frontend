import React from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import STC from "../assets/sidebar/STC.svg";
import ProfileBox from "../components/ProfileBox";
import PrimaryButton from "../components/core/PrimaryButton";

export default function UserProfile() {
  return (
    <>
      <Nav />
      <Sidebar />
      <div>
        <h2 className="text-[1.8rem] font-semibold text-center text-blue font-sans ">
          My Profile
        </h2>
        <div className="flex flex-col md:grid md:grid-rows-4 md:grid-cols-8 gap-4 m-16 mt-5">
          <div className="col-span-2">
            <div>
              <img
                className="rounded-full w-32 mx-auto"
                src={STC}
                alt="Profile"
              />
              <h3 className="text-gray text-[1.1rem] m-7 mb-2">Role: </h3>
              <div className="p-3 py-2 mx-7 mt-2 bg-lightblue text-blue rounded-md">
                Junior Core
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <ProfileBox label="Full Name" placeholder="Tanya Nijhawan" />
            <div className="flex flex-col md:grid grid-cols-2 md:gap-20">
              <ProfileBox label="Reg No." placeholder="21BIT0314" />
              <ProfileBox label="Contact Number" placeholder="1234567890" />
            </div>
            <ProfileBox
              label="Email"
              placeholder="tanya.nijhawan2021@vitstudent.ac.in"
            />
            <h3 className="text-gray p-2 mt-6 text-[1.2rem]">Domains</h3>
            <div className="flex flex-wrap justify-start p-2 pt-0">
              <div className="p-4 m-2 bg-lightblue text-blue rounded-xl font-semibold">
                Admin
              </div>
              <div className="p-4 m-2 bg-lightblue text-blue rounded-xl font-semibold">
                Admin
              </div>
              <div className="p-4 m-2 bg-lightblue text-blue rounded-xl font-semibold">
                Admin
              </div>
              <div className="p-4 m-2 bg-lightblue text-blue rounded-xl font-semibold">
                Admin
              </div>
              <div className="p-4 m-2 bg-lightblue text-blue rounded-xl font-semibold">
                Admin
              </div>
              <div className="p-4 m-2 bg-lightblue text-blue rounded-xl font-semibold">
                Admin
              </div>
              <div className="p-4 m-2 bg-lightblue text-blue rounded-xl font-semibold">
                Admin
              </div>
              <div className="p-4 m-2 bg-lightblue text-blue rounded-xl font-semibold">
                Admin
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end m-10">
          <PrimaryButton label={"Change Password"} />
        </div>
      </div>
    </>
  );
}
