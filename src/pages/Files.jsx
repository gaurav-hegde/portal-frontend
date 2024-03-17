import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import AddFolder from "../assets/files/AddFolder.svg";
import File from "../assets/files/File.svg";
import Folder from "../assets/files/Folder.svg";
import MagnifyingGlass from "../assets/membersInformation/MagnifyingGlass.svg";

export default function Files() {
  return (
    <div className="font-sans">
      <Sidebar />
      <Nav />

      <h2 className="text-[2rem] font-bold text-center text-blue pt-2 font-sans">
        Files
      </h2>
      <div className="grid grid-cols-9">
        <div className="col-span-7 shadow-xl m-5 h-screen overflow-y-hidden">
          <div className="flex justify-between pb-8 pt-8 p-5">
            <div className="pl-4">
              <div class="flex outline-none bg-graylight rounded-sm items-center">
                <img
                  className="h-11 w-5 ml-2"
                  src={MagnifyingGlass}
                  alt="Magnifying Glass Icon"
                />
                <input
                  className="border-none focus:ring-0 p-1 bg-graylight rounded-sm "
                  type="search"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10">
            <h2 className="text-[1.5rem] font-medium text-blue font-sans pl-9 col-span-8">
              Folders
            </h2>
            <button className="p-2 flex flex-row items-center justify-center bg-graylight w-32 h-10 col-span-2">
              <img className="h-11 w-5" src={AddFolder} alt="Add a Folder" />
              <h5 className="pl-2">Folder</h5>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-10 px-10">
            <button className="flex flex-row justify-center items-center rounded-sm outline outline-1 outline-blue p-5">
              <img src={Folder} alt="Folder" />
              <h5 className="pl-2">Web Development</h5>
            </button>
            <button className="flex flex-row justify-center items-center rounded-sm outline outline-1 outline-blue p-5">
              <img src={Folder} alt="Folder" />
              <h5 className="pl-2">Web Development</h5>
            </button>
            <button className="flex flex-row justify-center items-center rounded-sm outline outline-1 outline-blue p-5">
              <img src={Folder} alt="Folder" />
              <h5 className="pl-2">Web Development</h5>
            </button>
            <button className="flex flex-row justify-center items-center rounded-sm outline outline-1 outline-blue p-5">
              <img src={Folder} alt="Folder" />
              <h5 className="pl-2">Web Development</h5>
            </button>
          </div>
        </div>
        <div className="col-span-2 shadow-xl m-5 h-screen">
          <div className="grid justify-center">
            <div className="flex justify-center pt-32">
              <img className="w-[6rem]" src={File} alt="file" />
            </div>
            <h3 className="text-gray text-center mt-4 text-[1rem]">
              Select folder or file to view details
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
