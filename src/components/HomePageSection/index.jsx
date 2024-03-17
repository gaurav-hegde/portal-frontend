import React, { useEffect, useRef, useState } from "react";
import AddButtonLogo from "../../assets/home/AddButtonLogo.svg";

function HomePageSection({ title, logo, children, onAdd, expand, show }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const scrollablePortionRef = useRef(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
    };
  }, []);

  useEffect(() => {
    if (!scrollablePortionRef.current) {
      return;
    }
    scrollablePortionRef.current.style.height =
      windowWidth >= 1024 ? "100%" : expand ? "40vh" : "0rem";
  }, [windowWidth, expand]);

  return (
    <div
      className={`flex flex-col bg-white rounded-lg shadow-xl p-3 font-sans text-xl text-blue ${
        windowWidth >= 1024 ? "h-full" : ""
      }`}
      onClick={show}
    >
      <div className="flex justify-between">
        <div className="flex items-center flex-1">
          <img className="h-6 w-6 m-2" src={logo} alt={title} />
          <h1>{title}</h1>
        </div>
        {onAdd && (
          <button onClick={onAdd}>
            <img className="h-6 w-6 m-2" src={AddButtonLogo} alt="Add button" />
          </button>
        )}
      </div>
      <div
        ref={scrollablePortionRef}
        className="overflow-scroll transition-all duration-500 w-full text-sm"
      >
        {children}
      </div>
    </div>
  );
}

export default HomePageSection;
