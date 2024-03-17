import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Popup({ show, children }) {
  const [hide, setHide] = useState(true);
  useEffect(() => {
    show
      ? setHide(false)
      : setTimeout(() => {
          setHide(true);
        }, 200);
  }, [show]);
  return (
    <div
      className={`z-30 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center align-center ${
        hide ? "invisible" : "visible"
      }`}
    >
      <div
        className={`${
          show ? "scale-100" : "scale-0"
        } transition-all duration-200 relative p-8 w-full max-w-screen-sm bg-white rounded flex flex-col justify-center align-center h-min mx-10 my-auto overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
}
