import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import InputBox from "../components/InputBox";
import axios from "axios";
import { URL } from "../config/db-config";
import { useUserAuth } from "../context/UserAuthContext";
import Popup from "../components/Popup";

function CreatePollOption(props) {
  const [option, setOption] = useState();
  props.setOptions([...props.options, option]);
  return (
    <InputBox
      placeholder="Option"
      label="Poll Option"
      value={option}
      onChange={(e) => {
        setOption(e.target.value);
      }}
    />
  );
}

export default function CreatePoll() {
  const [poll, setPoll] = useState({});
  const [options, setOptions] = useState([]);
  const { user } = useUserAuth();
  const [error, setError] = useState({
    error: false,
    message: "No error",
  });
  const [inputList, setInputList] = useState([
    <CreatePollOption key={0} options={options} setOptions={setOptions} />,
  ]);

  const onAddBtnClick = () => {
    setInputList(
      inputList.concat(
        <CreatePollOption
          key={inputList.length}
          options={options}
          setOptions={setOptions}
        />,
      ),
    );
  };

  const onSubmit = async () => {
    setError({
      error: true,
      message: "Creating Poll",
    });
    try {
      await axios.post(
        URL + "/poll/create",
        {
          ...poll,
          options,
          GivenToDesignationTitle: "everyone",
        },
        {
          headers: { Authorization: "Bearer " + user.accessToken },
        },
      );
      setError({
        error: true,
        message: "Created Poll Successfully",
      });
    } catch (e) {
      setError({
        error: true,
        message: "An error occured",
      });
    }
  };

  return (
    <div className="font-sans">
      <Popup show={error.error}>
        <h1>{error.message}</h1>
      </Popup>
      <Sidebar />
      <Nav />
      <h2 className="text-[2rem] font-bold text-center text-blue pt-2">
        Create Polls
      </h2>
      <div className="flex flex-col mx-28">
        <form>
          <InputBox
            placeholder="Title"
            label="Poll Title"
            value={poll.title}
            onChange={(e) => {
              setPoll({
                ...poll,
                title: e.target.value,
              });
            }}
          />
          <InputBox
            placeholder="Description"
            label="Poll Description"
            value={poll.description}
            onChange={(e) => {
              setPoll({
                ...poll,
                description: e.target.value,
              });
            }}
          />
          {inputList}
        </form>
        <div className="flex justify-center p-5">
          <button
            className="m-10 bg-blue text-white p-3 px-4 sm:p-3 sm:px-6 rounded"
            onClick={onAddBtnClick}
          >
            Add Input
          </button>
          <button
            className="m-10 bg-blue text-white p-3 px-4 sm:p-3 sm:px-6 rounded"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
