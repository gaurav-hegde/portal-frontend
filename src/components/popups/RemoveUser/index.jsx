import React from "react";
import Close from "../../../assets/removeUser/Close.svg";

export default function RemoveUser(props) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div></div>
        <h1 className="text-blue font-bold text-[1.5rem] ">Remove User</h1>
        <button onClick={props.hide} className="p-2">
          <img className="w-8" src={Close} alt="close button" />
        </button>
      </div>
      <div className="grid grid-row-3 justify-center items-center">
        <div className="mt-4 p-2">
          <label>Enter User Email</label>
          <input
            type="text"
            className="w-full px-24 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue"
          />
        </div>

        <button className="bg-red h-9 w-20 mt-8 rounded text-white justify-self-center">
          Delete
        </button>
      </div>
    </>
  );
}
