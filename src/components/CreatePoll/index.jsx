import React, { useRef, useState } from "react";
import { useEffect } from "react";
import CreateButton from "../CreateButton";
import CreatePollCard from "./CreatePollCard";
import "react-toastify/dist/ReactToastify.css";

export default function NewPoll(props) {
  const [expanded, setExpanded] = useState(false);
  const [numberOfOptions, setNumberOfOptions] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);

  const cardContainerRef = useRef();
  const newPollRef = useRef();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth > 640) {
      newPollRef.current.style.height = 16 + 4 * numberOfOptions + "rem";
      cardContainerRef.current.style.height =
        (expanded ? 18 + 4 * numberOfOptions : 0) + "rem";
    } else {
      newPollRef.current.style.height = 26 + 4 * numberOfOptions + "rem";
      cardContainerRef.current.style.height =
        (expanded ? 30 + 4 * numberOfOptions : 0) + "rem";
    }
    if (expanded === false) setNumberOfOptions(1);
  }, [windowWidth, numberOfOptions, expanded]);

  return (
    <>
      <div className="cursor-pointer h-20">
        <button className="w-full" onClick={() => setExpanded(!expanded)}>
          <CreateButton name="Polls" expanded={expanded} />
        </button>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden`}
        ref={cardContainerRef}
      >
        <CreatePollCard
          close={() => setExpanded(false)}
          refresh={() => {
            props.setRefresh(props.refresh + 1);
          }}
          increaseNumberOfOptionsBy={(x) => {
            setNumberOfOptions(numberOfOptions + x);
          }}
          expanded={expanded}
          setExpanded={setExpanded}
          newPollRef={newPollRef}
        />
      </div>
    </>
  );
}
