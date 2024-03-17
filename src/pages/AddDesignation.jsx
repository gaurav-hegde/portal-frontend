import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import MagnifyingGlass from "../assets/membersInformation/MagnifyingGlass.svg";
import { useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import axios from "axios";
import { URL } from "../config/db-config";
import Popup from "../components/Popup";

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
      <div className="grid place-items-center  ">
        <input
          className="border rounded-sm border-2 w-4 h-4 focus:ring-0"
          type="checkbox"
        />
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
          <h2 className="text-[2rem] font-semibold text-center pb-2 sm:pb-12 text-blue font-sans ">
            Add Members to Designation
          </h2>
        </div>
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
                  className="border border-none p-1 w-11/12 focus:ring-0"
                  type="search"
                  placeholder="Search User"
                />
              </div>
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
          <div className="flex items-center justify-center">
            <p className="pr-3">Selection</p>
            <input
              className="border rounded-sm border-2 border-white bg-blue w-4 h-4 focus:ring-0"
              type="checkbox"
            ></input>
          </div>
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
