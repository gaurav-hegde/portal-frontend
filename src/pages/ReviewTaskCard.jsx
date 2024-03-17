import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import MagnifyingGlass from "../assets/membersInformation/MagnifyingGlass.svg";
import Calander from "../assets/reviewTaskCard/Calander.svg";
import List from "../assets/reviewTask/list.svg";
import Clock from "../assets/reviewTaskCard/Clock.svg";
import PersonTick from "../assets/reviewTask/persontick.svg";
import { Link } from "react-router-dom";

export default function ReviewTaskCard() {
  return (
    <div className="font-sans">
      <Sidebar />
      <Nav />

      <h2 className="text-[2rem] font-bold text-center text-blue pt-2 font-sans">
        Review Task
      </h2>
      <div className="flex flex-col md:flex-row justify-between border border-x-0 border-y-1 p-1 border-graylight mt-4  px-6 sm:px-16">
        <div className="flex items-center pb-3 md:pb-0">
          <button>
            <div className="pr-12 pl-1 flex items-center">
              <img className=" h-5 w-5  ml-2  " src={List} alt="List Icon" />
              <div type="submit" className="text-blue text-base pl-2 ">
                Task List
              </div>
            </div>
          </button>

          <button>
            <div className="pl-1 flex items-center">
              <img
                className=" h-5 w-5  ml-2  "
                src={PersonTick}
                alt="Person with Tick Icon"
              />

              <div type="submit" className="text-blue text-base pl-2 ">
                Task Given by you
              </div>
            </div>
          </button>
        </div>
        <div class="flex outline outline-1 outline-gray rounded-lg items-center">
          <img
            className=" h-5 w-5  ml-2  "
            src={MagnifyingGlass}
            alt="Magnifying Glass Icon"
          />

          <input
            className=" p-1 w-60 border-none focus:ring-0"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="pt-8 sm:pl-16 pl-2 pr-2">
        <div className="border border-graylight rounded-md pt-4 px-4 sm:w-96 w-fit border-2 border-b-gray border-b-3 ">
          <div className="font-bold text-base">
            <p>BootStrap Task</p>
          </div>
          <div className="flex text-xs justify-between pt-4">
            <div className="pr-2">
              <div className="bg-graylight p-1">
                <p>Created By: Deep Gandhi</p>
              </div>
            </div>
            <div className="flex bg-graylight  p-1">
              <img
                className=" h-4 w-4  ml-1  "
                src={Calander}
                alt="Calander Icon"
              />
              <p className="pl-1 pr-2">Jan 29th, 2022</p>
              <img className=" h-4 w-4  ml-1 " src={Clock} alt="Clock Icon" />
              <p className="pl-1">00:00</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Link to="/admin/reviewTask/reviewtasklist">
              <button
                type="submit"
                className="p-2 border my-5 py-3 bg-blue text-white rounded-lg text-xs"
              >
                View Submission
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-8 sm:pl-16 pl-2 pr-2">
        <div className="border border-graylight rounded-md pt-4 px-4 sm:w-96 w-fit border-2 border-b-gray border-b-3 ">
          <div className="font-bold text-base">
            <p>BootStrap Task</p>
          </div>
          <div className="flex text-xs justify-between pt-4">
            <div className="pr-2">
              <div className="bg-graylight p-1">
                <p>Created By: Deep Gandhi</p>
              </div>
            </div>
            <div className="flex bg-graylight  p-1">
              <img
                className=" h-4 w-4  ml-1  "
                src={Calander}
                alt="Calander Icon"
              />
              <p className="pl-1 pr-2">Jan 29th, 2022</p>
              <img className=" h-4 w-4  ml-1 " src={Clock} alt="Clock Icon" />
              <p className="pl-1">00:00</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Link to="/admin/reviewTask/reviewtasklist">
              <button
                type="submit"
                className="p-2 border my-5 py-3 bg-blue text-white rounded-lg text-xs"
              >
                View Submission
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
