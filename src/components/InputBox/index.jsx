import React from "react";

export default function InputBox(props) {
  return (
    <div className="mt-4 p-2 w-full">
      <label>{props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        className="w-full px-2 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue"
        value={props.value ? props.value : ""}
        onChange={props.onChange}
      />
    </div>
  );
}
