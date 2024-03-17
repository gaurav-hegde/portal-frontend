import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import { useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import axios from "axios";
import { URL } from "../config/db-config";
import Popup from "../components/Popup";
import { Link } from "react-router-dom";

function Member(props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 items-center content-center bg-white odd:bg-lightblue p-4 font-sans rounded-lg w-11/12 drop-shadow-lg  ">
      <div className="sm:col-span-2 col-span-1 grid-cols-1 sm:grid sm:grid-cols-2 place-items-center">
        <p className="grid place-items-center">{props.data.regNo}</p>
        <p className="grid place-items-center">{props.data.name}</p>
      </div>

      <p className="grid place-items-center">
        {props.data.position ? props.data.position.title : "Positionless"}
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
  useEffect(() => {
    async function getUsers(user) {
      const response = await axios.get(URL + "/designation/getUsers", {
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
        params: {
          title: "everyone",
        },
      });
      console.log(response.data);
      setUsers(response.data);
    }
    getUsers(user);
  }, [user]);

  return (
    <div>
      <Nav />
      <Sidebar />
      <div>
        <div>
          <h2 className="text-[2rem] font-semibold text-center pb-2 sm:pb-6 text-blue font-sans ">
            Review Task
          </h2>
        </div>
        <div className="flex justify-between border border-x-0 border-y-1 p-1 border-graylight mt-4  px-6 sm:px-16 ">
          <div className="text-gray text-base">
            <p>Bootstrap Task</p>
          </div>
          <div className="text-gray text-base">
            <p>Total Submission: 34</p>
          </div>
        </div>
        <div className="flex justify-between p-5 px-6 sm:px-16 text-xl text-blue text-lg">
          <div>
            <p>Completed: 0</p>
          </div>
          <div>
            <p>To be Reviewed: 32</p>
          </div>
          <div className="hidden md:block">
            <p>Incomplete: 2</p>
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
          <Link to="/admin/reviewtask/reviewtasklist">
            <p className="grid place-items-center md:hidden">View Subm</p>
            <div className="grid place-items-center">
              <p className="hidden md:block">View Submission</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 items-center justify-center p-2">
        {users.length === 0 && (
          <Popup show={true}>
            <h1>Loading...</h1>
          </Popup>
        )}
        {users.map((user) => (
          <Member data={user} />
        ))}
      </div>
    </div>
  );
}
