import React from "react";

export default function AdminButtons(props) {
  return (
    <button onClick={props.onClick}>
      <div className="border-2 rounded-md border-blue w-40 h-40 lg:w-44 lg:h-44 flex flex-col justify-evenly items-center p-2 hover:bg-blue hover:bg-opacity-10">
        <img src={props.image} alt={props.label} className="w-full h-full" />
      </div>
    </button>
  );
}
