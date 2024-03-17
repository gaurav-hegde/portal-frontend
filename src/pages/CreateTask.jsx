import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import InputBox from "../components/InputBox";
import Calander from "../assets/createTask/Calander.svg";

export default function CreateTask() {
  return (
    <div>
      <Sidebar />
      <Nav />
      <h2 className="text-[2rem] font-bold text-center text-blue pt-2 font-sans">
        Create Task
      </h2>
      <form className="p-2 flex justify-center font-sans text-lg">
        <div className="mb-4 sm:w-4/6 w-11/12">
          <InputBox placeholder="Title" label="Title" />
          <div className="mt-4 p-2">
            <label>Description</label>
            <input
              type="text"
              placeholder="Add the question here"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 pb-20 "
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="pl-2">
              <p className="pb-2">Assign To</p>
              <select className="rounded-lg pr-8 px-6 py-3 w-8/12 ">
                <option disabled selected className=" hidden ">
                  Assign
                </option>
                <option>efgh</option>
                <option>ijkl</option>
                <option>xyza</option>
                <option>Abcd</option>
              </select>
            </div>
            <div className="grid justify-end">
              <p className="pb-2">Deadline</p>
              <div class="flex outline outline-1 outline-black rounded-lg items-center px-4 py-2 ">
                <input
                  className="border-none focus:ring-0 w-11/12 p-1"
                  type="search"
                  placeholder="Search"
                />
                <button>
                  <img
                    className="h-5 w-5  ml-2"
                    src={Calander}
                    alt="Calander Icon"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="p-2 pt-9">
            <p>Question to ask during submission</p>
          </div>
          <div className="mt-4 px-4 py-7 border rounded-md border-t-8 border-t-blue">
            <div className="font-bold border border-t-0 border-x-0 border-b-1 p-1">
              <label>Title</label>
            </div>
            <input
              type="text"
              placeholder="Description"
              className="w-full px-4 py-2 mt-2  focus:outline-none border border-t-0 border-x-0 border-b-1 "
            />
          </div>
          <div className="pt-4">
            <div className="mt-4 px-4 py-7 border rounded-md">
              <label>Untitled Question</label>
              <input
                type="text"
                placeholder="Short answer text"
                className="w-full px-4 py-2 mt-2  focus:outline-none border border-t-0 border-x-0 border-b-1 "
              />
            </div>
          </div>
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
                className="p-10 border w-full my-5 py-3 bg-white  text-blue rounded-lg text-[1.1rem] "
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
