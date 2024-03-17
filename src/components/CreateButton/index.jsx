import React from "react";
import Plus from "../../assets/polls/CreatePlus.svg";

export default function CreateButton(props) {
  return (
    <div className="p-1 px-5 sm:p-5 sm:px-28">
      <div className="p-3 rounded-lg shadow-xl flex flex-row">
        <img src={Plus} className={`transition-all duration-300 w-6 sm:w-8 ${props.expanded ? "rotate-90": "rotate-45"}`} alt="Add User" />
        <h2 className="px-3 test-[1rem] sm:text-[1.5rem] text-blue">
          Create {props.name}
        </h2>
      </div>
    </div>
  );
}
