import React, { useState } from "react";
import { useEffect } from "react";
import Delete from "../../assets/polls/Close.svg";

export default function Option(props) {
  const [showTimer, setShowTimer] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowTimer(true), 300);
  }, []);

  function handleDelete() {
    props.delete();
  }

  return (
    <div
      className={`relative transition-all duration-300  flex items-center overflow-hidden h-16 ${
        showTimer ? "w-64" : "w-0"
      }`}
    >
      <label className="pl-0">
        <input
          type="text"
          placeholder="Option"
          className="focus:ring-0 border-t-0 border-r-0 border-l-0 border-b-2"
          value={props.option}
          onChange={props.setOption}
        />
        <button onClick={handleDelete} className={`absolute top-5 right-12`}>
          <img
            src={Delete}
            alt="close button"
            className={`transition-all duration-[15ms] delay-300 ${
              showTimer ? "h-6" : "h-0"
            } aspect-square`}
          />
        </button>
      </label>
    </div>
  );
}
