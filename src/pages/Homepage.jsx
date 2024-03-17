import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import GoalsSection from "../components/HomePageSection/GoalsSection.jsx";
import AnnouncementSection from "../components/HomePageSection/AnnouncementSection.jsx";
import ReminderSection from "../components/HomePageSection/ReminderSection";
import NotesSection from "../components/HomePageSection/NotesSection";
import { useState } from "react";

function Homepage() {
  const [sectionState, setSectionState] = useState(0);
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="flex lg:grid grid-rows-1 p-4 h-[90vh] bg-graylight">
        <div className="row-span-1 flex flex-col lg:grid grid-rows-1 grid-cols-4 gap-4">
          <div className="row-span-1 md:col-span-1">
            <ReminderSection
              expand={sectionState === 1}
              show={() => setSectionState(1)}
            />
          </div>
          <div className="flex flex-col lg:grid gap-4 grid-rows-2 lg:col-span-2 ">
            <AnnouncementSection
              expand={sectionState === 2}
              show={() => setSectionState(2)}
            />
            <GoalsSection
              expand={sectionState === 3}
              show={() => setSectionState(3)}
            />
          </div>
          <div className="col-span-1">
            <NotesSection
              expand={sectionState === 4}
              show={() => setSectionState(4)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
