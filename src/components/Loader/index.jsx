import React from "react";
import STC from "../../assets/sidebar/STC.svg";
import Dotted from "../../assets/Loader/Dotted.png";

export default function Loader({ loading }) {
  return (
    loading && (
      <div className="absolute bg-white w-full h-full z-10 ">
        <div className="relative flex justify-center items-center h-full w-full">
          <img
            src={Dotted}
            className="absolute animate-spin-slow duration-75 w-20 h-20"
            alt="Loading"
          />
          <img src={STC} className="absolute w-8 h-8" alt="Loading" />
        </div>
      </div>
    )
  );
}
