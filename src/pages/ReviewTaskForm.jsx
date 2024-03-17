import React from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";

export default function CreateTask() {
  return (
    <div>
      <Sidebar />
      <Nav />

      <h2 className="text-[2rem] font-bold text-center text-blue pt-2 font-sans">
        Review Task
      </h2>
      <div className="flex justify-between border border-x-0 border-y-1 p-1 border-graylight mt-4 font-semibold px-6 sm:px-16 ">
        <div className="text-blue text-base">
          <p>Anitej Sood</p>
        </div>
        <div className="text-blue text-base">
          <p>Junior Core</p>
        </div>
      </div>
      <form className="p-2 font-sans text-lg sm:px-36 px-10">
        <div className="mb-4">
          <h1 className="p-2 pt-7 text-blue font-semibold text-[1.5rem] md:text-[1.8rem]">
            Response
          </h1>
          <div className="pt-4">
            <div className="mt-4 pt-7 pb-9 border rounded-md px-6 border-gray">
              <label>Question</label>
              <div className="pt-7 border border-t-0 border-x-0 border-b-1 text-gray text-base">
                <p>Github Link</p>
              </div>
            </div>
          </div>
          <div className="pt-4 ">
            <div className="mt-4 pt-7 pb-9 border rounded-md px-6 border-gray">
              <label>Question</label>
              <div className="pt-7 border border-t-0 border-x-0 border-b-1 text-gray text-base">
                <p>Github Link</p>
              </div>
            </div>
          </div>
          <div className="pt-4 ">
            <div className="mt-4 pt-7 pb-9 border rounded-md px-6 border-gray">
              <label>Question</label>
              <div className="pt-7 border border-t-0 border-x-0 border-b-1 text-gray text-base">
                <p>Github Link</p>
              </div>
            </div>
            <h1 className="p-2 py-8 text-blue font-semibold text-[1.5rem] md:text-[1.8rem]">
              Review Section
            </h1>
          </div>
          <textarea className="w-full h-[17rem] resize-none px-24 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue"></textarea>
          <div className="flex justify-center pt-3">
            <div className="p-2">
              <button
                type="submit"
                className="p-10 border w-full my-5 py-3 bg-blue text-white rounded-lg text-[1.1rem]"
              >
                Submit
              </button>
            </div>
            <div className="p-2">
              <button
                type="submit"
                className="p-10 border w-full my-5 py-3 bg-white  text-blue rounded-lg text-[1.1rem]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
