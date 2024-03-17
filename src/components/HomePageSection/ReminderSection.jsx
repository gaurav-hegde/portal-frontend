import React from "react";
import HomePageSection from "./index.jsx";
import Reminders from "../../assets/home/Reminders.svg";

let reminders = [
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
];

function Reminder({ reminder }) {
  return (
    <div>
      <div className="m-2 p-4 max-w-full items-center bg-lightblue rounded-lg">
        {reminder}
      </div>
    </div>
  );
}

function ReminderSection(props) {
  return (
    <HomePageSection
      title="Reminders"
      logo={Reminders}
      expand={props.expand}
      show={props.show}
    >
      <div className="p-2 overflow-auto w-full">
        {reminders.map((reminder) => (
          <Reminder reminder={reminder} />
        ))}
      </div>
    </HomePageSection>
  );
}

export default ReminderSection;
