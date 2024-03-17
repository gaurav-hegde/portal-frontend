import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "../core/PrimaryButton";
import Loader from "../Loader";
import notifications from "../notifications";
import axios from "../../api/axios.js";

function ListItem(props) {
  const percentageBarRef = useRef();
  useEffect(() => {
    if (props.numberOfVotes == 0) {
      percentageBarRef.current.style.width = "0%";
      return;
    } else {
      percentageBarRef.current.style.width =
        "" + (100 * props.numberOfVotes) / props.totalVotes + "%";
    }
  }, [props]);
  return (
    <>
      <div className="flex items-center justify-between w-11/12">
        <div className="flex items-center px-3 justify-start">
          <input
            type="radio"
            value={props.value}
            name={props.name}
            checked={props.checked}
            className="w-5 h-5 rounded focus:ring-0"
          />
          <label className="p-3 text-[1rem] sm:text-[1.2rem]">
            {props.label}
          </label>
        </div>
        <p className="justify-self-end">{`${
          Math.round((10000 * props.numberOfVotes) / props.totalVotes) / 100
        }% (${props.numberOfVotes} votes)`}</p>
      </div>
      <div className="ml-3 w-11/12 bg-graylight rounded-full">
        <div
          ref={percentageBarRef}
          className={`transition-all duration-500 bg-blue text-xs font-medium text-white text-center pr-0 pl-0 p-2 leading-none rounded-full w-0`}
        ></div>
      </div>
    </>
  );
}

export default function PollOption(props) {
  let index = 0;

  let listOptions = props.poll.options.map((option) => {
    return (
      <ListItem
        label={option}
        checked={
          props.poll.responses.response &&
          +props.poll.responses.response === index
        }
        key={index}
        numberOfVotes={props.poll.statistics[index]}
        name={"poll-" + props.poll.id}
        value={index++}
        totalVotes={props.poll.votedBy}
      />
    );
  });
  const [selectedOption, setSelectedOption] = useState(-1);
  const [loading, setLoading] = useState(false);

  async function onVote() {
    if (selectedOption === -1) {
      notifications.error("Vote toh kar ****");
      // notifications.error("Please select an option! ");
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      await axios.authorizedPatch("/poll/response", {
        pollId: props.poll.id,
        response: selectedOption,
      });
      notifications.success("Vote Successfull");
      props.refresh();
    } catch (e) {
      notifications.error(e.message);
    }
    setLoading(false);
  }
  return (
    <div className="p-5 sm:p-5 md:px-28">
      <div className="relative p-3 rounded-lg shadow-xl grid sm:grid-cols-5 gap-1">
        <Loader loading={loading} />
        <div className="sm:col-span-3">
          <h2 className="px-3 text-[1.2rem] sm:text-[1.5rem] font-bold text-blue">
            {props.poll.title}
          </h2>
          <h1 className="p-3 pt-5 text-[1rem] sm:text-[1.3rem] font-medium text-grey-brown">
            {props.poll.description}
          </h1>
          <div
            className="pt-3 pb-3"
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {listOptions}
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex flex-col h-full justify-between sm:items-end">
            <div className="text-[1rem] text-gray p-5">
              <div></div>
              <h4>Given by: {props.poll.CreatedBy.name}</h4>
            </div>
            <div className="m-2">
              <PrimaryButton onClick={onVote} label={"Vote"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
