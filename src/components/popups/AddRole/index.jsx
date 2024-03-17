import React from "react";
import Close from "../../../assets/removeUser/Close.svg";

export default function RemoveUser(props) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div></div>
        <h1 className="text-blue font-bold text-[1.5rem] ">Create Role</h1>
        <button onClick={props.hide} className="p-2">
          <img className="w-8" src={Close} alt="close button" />
        </button>
      </div>
      <div className="grid grid-row-3 justify-center items-center">
        <div className="mt-4 p-2">
          <label>Role Title</label>
          <input
            type="text"
            className="w-full px-24 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue"
          />
        </div>

        <div className="justify-self-center grid grid-cols-2 gap-4">
          <button className="bg-blue h-9 w-20 mt-8 rounded text-white">
            Create
          </button>
          <button
            onClick={() => props.setTrigger(false)}
            className="border-2 border-blue h-9 w-20 mt-8 rounded text-blue"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
