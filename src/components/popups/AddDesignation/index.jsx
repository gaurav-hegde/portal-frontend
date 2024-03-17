import React, { useState } from "react";
import Close from "../../../assets/removeUser/Close.svg";
import InputBox from "../../InputBox";
import Loader from "../../Loader";
import axios from "../../../api/axios";
import notifications from "../../notifications";
import { Link } from "react-router-dom";

export default function RemoveUser(props) {
  const [loading, setLoading] = useState(false);
  const [designation, setDesignation] = useState({
    name: "",
    description: "",
  });
  async function handleSubmit() {
    setLoading(true);
    try {
      console.log(
        (await axios.authorizedPost("/designation/create", designation)).data,
      );
      props.hide();
      notifications.success("Successfully created");
    } catch (e) {
      notifications.error(e.message);
    }
    setLoading(false);
  }

  return (
    <>
      <Loader loading={loading} />
      <div className="flex justify-between items-center">
        <div></div>
        <h1 className="text-blue font-bold text-[1.5rem] ">
          Create Designation
        </h1>
        <button onClick={props.hide} className="p-2">
          <img className="w-8" src={Close} alt="close button" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-4 p-2 w-full">
          <InputBox
            label="Designation Title"
            type="text"
            className="w-full px-24 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue"
            value={designation.title}
            onChange={(e) =>
              setDesignation({ ...designation, title: e.target.value })
            }
          />
        </div>

        <div className="justify-self-center grid grid-cols-2 gap-4">
          <Link to="/AddDesignation">
            <button
              className="bg-blue h-9 w-20 mt-8 rounded text-white"
              onClick={handleSubmit}
            >
              Create
            </button>
          </Link>
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
