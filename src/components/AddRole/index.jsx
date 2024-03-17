import React from "react";
import Close from "../../assets/removeUser/Close.svg";

export default function AddRole(props) {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center align-center font-sans">
      <div className="relative w-full max-w-screen-sm h-80 bg-white rounded-xl flex flex-col m-auto">
        <button onClick={() => props.setTrigger(false)} className="grid p-2">
          <img
            className="w-8 justify-self-end"
            src={Close}
            alt="close button"
          />
        </button>
        <div className="grid grid-row-3 justify-center items-center">
          <h1 className="text-blue font-bold text-[1.5rem] ">Add Role</h1>
          <div className="mt-4 p-2">
            <label>Enter the role of user in team</label>
            <input
              type="text"
              className="w-full px-18 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue"
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
      </div>
    </div>
  ) : (
    ""
  );
}
