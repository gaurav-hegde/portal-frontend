import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputBox from "../../InputBox";
import Close from "../../../assets/removeUser/Close.svg";
import Loader from "../../Loader";
import axios from "../../../api/axios";
import notifications from "../../notifications";

export default function CreateTeam(props) {
  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState({
    name: "",
    description: "",
  });
  async function handleSubmit() {
    setLoading(true);
    try {
      console.log((await axios.authorizedPost("/team/create", team)).data);
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
        <h1 className="text-blue font-bold text-[1.5rem] ">Create Team</h1>
        <button onClick={props.hide} className="p-2">
          <img className="w-8" src={Close} alt="close button" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <InputBox
          label="Team Name"
          placeholder=" "
          value={team.name}
          onChange={(e) => setTeam({ ...team, name: e.target.value })}
        />
        <div className="mt-4 p-2 w-full">
          <label>Team Description</label>
          <textarea
            className="w-full h-[17rem] resize-none py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue"
            value={team.description}
            onChange={(e) => setTeam({ ...team, description: e.target.value })}
          ></textarea>
        </div>
        <div className="justify-self-center grid grid-cols-2 gap-4">
          <Link to="/selectTeamMembers">
            <button
              className="bg-blue h-9 w-20 mt-8 rounded text-white"
              onClick={handleSubmit}
            >
              Create
            </button>
          </Link>
          <button
            onClick={props.hide}
            className="border-2 border-blue h-9 w-20 mt-8 rounded text-blue"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
