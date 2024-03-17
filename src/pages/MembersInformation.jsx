import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import MagnifyingGlass from "../assets/membersInformation/MagnifyingGlass.svg";
import RightArrow from "../assets/membersInformation/RightArrow.svg";
import { useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Loader from "../components/Loader";
import axios from "../api/axios.js";
import notifications from "../components/notifications";
import { ToastContainer } from "react-toastify";

function Member({ data }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 items-center content-center bg-white odd:bg-lightblue p-4 font-sans rounded-lg w-11/12 drop-shadow-lg  ">
      <div className="sm:col-span-2 col-span-1 grid-cols-1 sm:grid sm:grid-cols-2 place-items-center">
        <p className="grid place-items-start">{data.regNo}</p>
        <p className="grid place-items-start">{data.name}</p>
      </div>

      <p className="grid place-items-center">
        {data.position ? data.position.title : "Positionless"}
      </p>
      <div className="grid place-items-center">
        <img src={RightArrow} alt="Right Arrow Icon" />
      </div>
    </div>
  );
}

export default function MembersInfo() {
  const { user } = useUserAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    user &&
      (async () => {
        setLoading(true);
        try {
          setUsers(
            (
              await axios.authorizedGet("/designation/getUsers", {
                params: { title: "everyone" },
              })
            ).data,
          );
        } catch (e) {
          notifications.error(e.message);
        }
        setLoading(false);
      })();
  }, [user]);

  return (
    <div>
      <Nav />
      <Sidebar />
      <ToastContainer />
      <div>
        <div>
          <h2 className="text-[2rem] font-semibold text-center pb-2 sm:pb-12 text-blue font-sans ">
            Members Information
          </h2>
        </div>
        <div className="relative min-h-[60vh]">
          <Loader loading={loading} />
          <div className="flex justify-center">
            <div className="flex justify-between w-11/12 pb-8 pt-8 p-2">
              <div className="pl-2">
                <div class="flex outline outline-1 outline-gray rounded-lg items-center">
                  <img
                    className=" h-5 w-5  ml-2  "
                    src={MagnifyingGlass}
                    alt="Magnifying Glass Icon"
                  />

                  <input
                    className=" p-1 w-11/12 border-none focus:ring-0"
                    type="search"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center p-2">
            <div className="grid grid-cols-3 sm:grid-cols-4 content-center p-4 bg-blue text-white text-lg font-sans rounded-lg w-11/12 drop-shadow-lg  ">
              <div className="sm:col-span-2 col-span-1 grid-cols-1 sm:grid sm:grid-cols-2 hidden place-items-center ">
                <p>Reg No.</p>
                <p>Name</p>
              </div>
              <div className="grid sm:hidden place-items-center">
                <p>Details</p>
              </div>
              <p className="grid place-items-center">Position</p>
              <p className="grid place-items-center">More Info</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 items-center justify-center p-2 ">
            {users.map((user) => (
              <Member data={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
