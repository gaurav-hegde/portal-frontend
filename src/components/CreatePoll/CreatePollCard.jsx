import React, { useState } from "react";
import { useEffect } from "react";
import Loader from "../Loader";
import Option from "./Option";
import PrimaryButton from "../core/PrimaryButton";
import notificaitons from "../notifications.js";
import axios from "../../api/axios.js";
import notifications from "../notifications.js";

export default function CreatePollCard(props) {
  const [loading, setLoading] = useState(false);
  const [poll, setPoll] = useState({
    title: "",
    description: "",
    options: [""],
  });
  let index = 0;
  async function handleSubmit() {
    setLoading(true);
    try {
      await axios.authorizedPost("/poll/create", {
        ...poll,
        GivenToDesignationTitle: "everyone",
      });
      notificaitons.success("Poll created Successfully !");
      props.refresh();
      props.close();
    } catch (e) {
      notifications.error(e.message);
    }
    setLoading(false);
  }
  useEffect(() => {
    if (props.expanded === false) {
      setPoll({
        title: "",
        description: "",
        options: [""],
      });
    }
  }, [props]);

  return (
    <div className="relative p-5 md:p-1 md:px-28">
      <div
        className="relative transition-all duration-300 p-8 pt-16  rounded-lg shadow-xl grid sm:grid-cols-5 overflow-hidden"
        ref={props.newPollRef}
      >
        {/* <img className="absolute right-4 top-8 cursor-pointer" src={Delete} alt="close button" onClick={props.close}/> */}
        <Loader loading={loading} />
        <div className="sm:col-span-3">
          <div>
            <input
              type="text"
              className="focus:ring-0 border-t-0 border-r-0 border-l-0 border-b-2 border-blue w-2/3 h-10 text-[1.2rem] p-3 bg-lightblue"
              placeholder="Poll Title"
              value={poll.title}
              onChange={(e) => setPoll({ ...poll, title: e.target.value })}
            />
            <input
              type="text"
              className="focus:ring-0 border-gray-dark border-t-0 border-r-0 border-l-0 border-b-2 w-full p-2 pt-5 mb-4"
              placeholder="Enter the question"
              value={poll.description}
              onChange={(e) =>
                setPoll({ ...poll, description: e.target.value })
              }
            />
            {poll.options.map((option) => {
              let i = index;
              return (
                <Option
                  option={option}
                  delete={() => {
                    let options = poll.options;
                    if (options.length <= 1) return;
                    options.splice(i, 1);
                    setPoll({
                      ...poll,
                      options,
                    });
                    props.increaseNumberOfOptionsBy(-1);
                  }}
                  setOption={(e) => {
                    let options = poll.options;
                    options[i] = e.target.value;
                    setPoll({
                      ...poll,
                      options,
                    });
                  }}
                  key={index++}
                />
              );
            })}
            <button
              className="absolute bottom-48 sm:bottom-8 text-blue"
              onClick={() => {
                setPoll({ ...poll, options: [...poll.options, ""] });
                props.increaseNumberOfOptionsBy(1);
              }}
              id="add-option"
            >
              <h3 className="text-[1rem]">Add Option</h3>
            </button>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex flex-col sm:flex-col h-full justify-end sm:justify-between items-center sm:items-end">
            <div className="w-full sm:w-auto sm:pr-3 mb-4 invisible">
              <h3 className="sm:pb-2">Assigned To</h3>
              <select className="border-2 rounded border-gray-dark focus:border-gray-dark focus:ring-0 sm:pr-24 text-gray-dark w-full sm:w-auto">
                <option>Assign</option>
              </select>
            </div>

            <div className="flex justify-between w-full sm:w-auto sm:mt-20">
              <button
                className="bg-white text-blue p-3 px-3 sm:p-3 sm:px-4 rounded mr-2"
                onClick={props.close}
              >
                Cancel
              </button>
              <PrimaryButton onClick={handleSubmit} label="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
