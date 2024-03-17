import React from "react";

export default function ProfileBox(props) {
  return (
    <div className="mt-4 p-2 w-full">
      <label className="text-gray text-[1.1rem]">{props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        className="w-full px-2 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue placeholder-black"
        value={props.value ? props.value : ""}
        onChange={props.onChange}
        disabled
      />
    </div>
  );
}
