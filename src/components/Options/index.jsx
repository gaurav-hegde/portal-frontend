import React from "react";
import { Link } from "react-router-dom";

export default function Option(props) {
  let active = props.href && window.location.pathname.search(props.href) !== -1;
  return (
    <li
      className={
        "m-[0.1vh] p-[2vh] rounded-xl text-grey-600 " +
        (active ? "bg-[#f4f2fe]" : "")
      }
    >
      <Link to={props.href} className="flex gap-4">
        <img className="" src={props.image} alt={props.label} />
        {props.label}
      </Link>
    </li>
  );
}
