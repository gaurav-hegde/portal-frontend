import React from "react";
import Popup from "../Popup";
import ErrorLogo from "../../assets/error/ErrorLogo.svg";
import PrimaryButton from "../core/PrimaryButton";

function Error({ error, onErrorDismiss }) {
  return (
    <Popup show={error}>
      <div className="flex flex-col items-center justify-between h-96 p-4 sm:p-10">
        <img src={ErrorLogo} alt="Error" className="h-24" />
        <div className="flex flex-col items-center justify-center">
          <h1 className=" text-4xl">Error</h1>
          <p className=" text-gray text-xl">{error}</p>
        </div>
        <PrimaryButton onClick={onErrorDismiss} label="Ok" />
      </div>
    </Popup>
  );
}

export default Error;
