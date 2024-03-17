import React, { useState } from "react";
import Close from "../../../assets/removeUser/Close.svg";
import Loader from "../../Loader";
import axios from "../../../api/axios";
import notifications from "../../notifications";

export default function CreateAnnouncement(props) {
  const [loading, setLoading] = useState(false);
  const [announcement, setAnnouncement] = useState({
    description: "",
    title: "",
  });
  async function handleSubmit() {
    setLoading(true);
    try {
      console.log(
        (
          await axios.authorizedPost("/announcement/create", {
            ...announcement,
            GivenToDesignationTitle: "everyone",
          })
        ).data,
      );
      props.hide();
      notifications.success("Successfully announced");
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
          Create Announcement
        </h1>
        <button onClick={props.hide} className="p-2">
          <img className="w-8" src={Close} alt="close button" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full mt-4 p-2 ">
          <label>Description</label>
          <textarea
            className="w-full h-[17rem] resize-none py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue"
            value={announcement.description}
            onChange={(e) =>
              setAnnouncement({ ...announcement, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-blue h-9 w-20 mt-8 rounded text-white"
            onClick={handleSubmit}
          >
            Create
          </button>
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
