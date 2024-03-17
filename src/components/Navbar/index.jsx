import { useState } from "react";
import BackArrow from "../../assets/sidebar/BackArrow.svg";
import { useUserAuth } from "../../context/UserAuthContext";
import Error from "../Error";

export default function Navbar() {
  let { logOut } = useUserAuth();
  let [error, setError] = useState();

  return (
    <div className="flex items-center justify-between w-full h-[10vh] bg-grey pl-8 pr-16">
      <Error error={error} />
      <button
        onClick={() => {
          window.history.go(-1);
        }}
      >
        <img className="h-8 w-8" src={BackArrow} alt="Logo" />
      </button>
      <div>
        <button
          className="bg-white text-blue p-3 px-3 sm:p-3 sm:px-4 rounded mr-2"
          onClick={async () => {
            try {
              await logOut();
            } catch (e) {
              setError(e.message);
            }
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
