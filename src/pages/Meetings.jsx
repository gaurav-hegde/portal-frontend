import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Plus from "../assets/meetings/Plus.svg";
import Nav from "../components/Navbar";
import { useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Loader from "../components/Loader";
import axios from "../api/axios.js";
import Error from "../components/Error";
import notifications from "../components/notifications";
import { ToastContainer } from "react-toastify";

function Member({ data }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 items-center content-center bg-white odd:bg-lightblue p-4 font-sans rounded-lg w-11/12 drop-shadow-lg  ">
      <div className="sm:col-span-2 col-span-1 grid-cols-1 sm:grid sm:grid-cols-2 place-items-center">
        <p className="grid place-items-center">21/12/22</p>
        <p className="grid place-items-center">00:00 pm</p>
      </div>

      <p className="grid place-items-center">
        Junior Core
      </p>
      <div className="flex justify-center">
        <button className="p-1 py-1.5 w-2/3 border w-full bg-blue text-white rounded-lg text-[1.1rem]">
          View
        </button>
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
      <div className="relative min-h-[60vh]">
          <Loader loading={loading} />
      <div>
      <div>
          <h2 className="text-[2rem] font-semibold text-center pb-2 sm:pb-6 text-blue font-sans ">
            Meetings
          </h2>
        </div>
        <div className="flex justify-center p-2 pb-5">
          <div className=" p-2 w-11/12 shadow-lg rounded-lg">
            <button className="flex items-center content-center text-blue font-sans text-lg">
              <img className="pr-3" src={Plus} alt="Plus"></img>
              <p>Create Meetings</p>
            </button>
          </div>
        </div>
        
          <div className="flex justify-center">
          </div>
          <div className="flex justify-center p-2">
            <div className="grid grid-cols-3 sm:grid-cols-4 content-center p-4 bg-blue text-white text-lg font-sans rounded-lg w-11/12 drop-shadow-lg  ">
              <div className="sm:col-span-2 col-span-1 grid-cols-1 sm:grid sm:grid-cols-2 hidden place-items-center ">
                <p>Date</p>
                <p>Time</p>
              </div>
              <div className="grid sm:hidden place-items-center">
                <p>Details</p>
              </div>
              <p className="grid place-items-center">Attendees</p>
              <p className="grid place-items-center">View More</p>
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

