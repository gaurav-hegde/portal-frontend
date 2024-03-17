import HomePageSection from "./index.jsx";
import CheckBoxRoundChecked from "../../assets/home/CheckBoxRoundChecked.svg";
import Reminders from "../../assets/home/Reminders.svg";
import CheckBoxRoundUnchecked from "../../assets/home/CheckBoxRoundUnchecked.svg";
import DeleteIcon from "../../assets/home/DeleteIcon.svg";
import Tick from "../../assets/home/Tick.svg";
import { useEffect, useState } from "react";

function Goal({ goal }) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="flex items-center bg-lightblue h-max w-full rounded-lg p-4 mt-2">
        <button onClick={() => setChecked(!checked)}>
          <img
            className="h-8 w-8 p-2"
            src={checked ? CheckBoxRoundChecked : CheckBoxRoundUnchecked}
            alt="checkbox"
          />
        </button>
        <div className="flex-1">{goal}</div>
        <button>
          <img className="h-8 w-8 p-2" src={DeleteIcon} alt="checkbox" />
        </button>
      </div>
    </>
  );
}

function CreateGoal({ createGoal }) {
  const [goal, setGoal] = useState();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createGoal(goal);
        }}
        className="flex items-center bg-lightblue h-max w-full rounded-lg p-4 mt-2"
      >
        <div className="pl-0 relative">
          <input
            type="text"
            placeholder="Title"
            className="bg-lightblue focus:ring-0 border-t-0 border-r-0 border-l-0 border-b-2 pr-6"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <button type="submit" className={`absolute top-2 right-0`}>
            <img src={Tick} alt="close button" className="h-6 w-6" />
          </button>
        </div>
      </form>
    </>
  );
}

function GoalsSection(props) {
  const [showCreate, setShowCreate] = useState(false);
  const [goals, setGoals] = useState([
    "Hello",
    "wrong",
    "numer",
    "I would like to finish this project fast",
    "numer",
    "numer",
    "numer",
    "numer",
    "numer",
    "numer",
    "numer",
  ]);

  return (
    <HomePageSection
      title="Goals"
      logo={Reminders}
      onAdd={() => {
        setShowCreate(true);
      }}
      show={props.show}
      expand={props.expand}
    >
      <div className="flex-1 p-4">
        {showCreate && (
          <CreateGoal
            createGoal={(goal) => {
              setShowCreate(false);
              setGoals([...goals, goal]);
            }}
          />
        )}
        {goals.map((goal) => (
          <Goal goal={goal} />
        ))}
      </div>
    </HomePageSection>
  );
}

export default GoalsSection;
