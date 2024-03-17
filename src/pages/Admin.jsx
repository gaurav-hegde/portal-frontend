import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CreateUser from "../assets/admin/CreateUser.svg";
import AddTask from "../assets/admin/AddTask.svg";
import CreateTeam from "../assets/admin/CreateTeam.svg";
import MemberStats from "../assets/admin/MemberStats.svg";
import ReviewTask from "../assets/admin/ReviewTask.svg";
import RemoveUser from "../assets/admin/RemoveUser.svg";
import RemoveUserPopup from "../components/popups/RemoveUser";
import CreateTeamPopup from "../components/popups/CreateTeam";
import CreateAnnouncementPopup from "../components/popups/CreateAnnouncement";
import AddDesiginationPopup from "../components/popups/AddDesignation";
import AddRolePopup from "../components/popups/AddRole";
import Announcements from "../assets/admin/Announcements.svg";
import CreateDesignation from "../assets/admin/CreateDesignation.svg";
import CreateRole from "../assets/admin/CreateRole.svg";
import AdminButtons from "../components/AdminButtons";
import Popup from "../components/Popup";
import { ToastContainer } from "react-toastify";

export default function Admin() {
  const [popupChild, setPopupChild] = useState(<></>);
  const [showPopup, setShowPopup] = useState(false);
  const hide = () => {
    setShowPopup(false);
    setPopupChild(<></>);
  };
  const show = (Component) => {
    setPopupChild(<Component hide={hide} />);
    setShowPopup(true);
  };
  return (
    <div>
      <Sidebar />
      <Navbar />
      <ToastContainer />
      <h2 className="text-[2rem] font-bold text-center text-blue pt-2 font-sans">
        Admin Controls
      </h2>
      <div className="flex justify-evenly m-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-24 justify-evenly items-center p-4">
          <Popup show={showPopup}>{popupChild}</Popup>
          <Link to="/admin/createUser">
            <AdminButtons label="Create User" image={CreateUser} />
          </Link>
          <Link to="/admin/createTask">
            <AdminButtons label="Add Task" image={AddTask} />
          </Link>
          <AdminButtons
            onClick={() => {
              show(CreateTeamPopup);
            }}
            label="Create Team"
            image={CreateTeam}
          />

          <AdminButtons label="Member Stats" image={MemberStats} />
          <Link to="/admin/reviewTask">
            <AdminButtons label="Review Task" image={ReviewTask} />
          </Link>
          <AdminButtons
            onClick={() => {
              show(RemoveUserPopup);
            }}
            label="Remove User"
            image={RemoveUser}
          />
          <AdminButtons
            onClick={() => {
              show(CreateAnnouncementPopup);
            }}
            label="Announcements"
            image={Announcements}
          />
          <AdminButtons
            onClick={() => {
              show(AddDesiginationPopup);
            }}
            label="Create Desigination"
            image={CreateDesignation}
          />
          {/* <AdminButtons
            onClick={() => {
              show(AddRolePopup);
            }}
            label="Create Desigination"
            image={CreateRole}
          /> */}
        </div>
      </div>
    </div>
  );
}
