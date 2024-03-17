import React, { useEffect, useRef, useState } from "react";
import HomePageSection from "./index.jsx";
import Reminders from "../../assets/home/Reminders.svg";
import NoteLogo from "../../assets/home/Note.svg";
import { ContentState, Editor, EditorState } from "draft-js";
import Tick from "../../assets/home/Tick.svg";

function EditTitle(props) {
  return (
    <form className="w-full">
      <div className="pl-0 relative">
        <input
          type="text"
          placeholder="Title"
          className="w-full focus:ring-0 border-t-0 border-r-0 border-l-0 border-b-2 pr-6"
          value={props.title}
          onChange={props.setTitle}
        />
        <button onClick={props.onClick} className={`absolute top-2 right-0`}>
          <img src={Tick} alt="close button" className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
}

function Note({ note }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(note.note)),
  );
  const [changed, setChanged] = useState();
  const [title, setTitle] = useState(note.title);
  const [titleBuffer, setTitleBuffer] = useState();
  const saveDivRef = useRef();

  useEffect(() => {
    setChanged(editorState.getCurrentContent().getPlainText() != note.note);
  }, [editorState, note]);

  useEffect(() => {
    saveDivRef.current.style.height = changed ? "2.5rem" : "0rem";
  }, [changed, saveDivRef]);

  return (
    <div className="bg-blue m-4 rounded-md pt-2 shadow-xl">
      <div className="bg-white p-4 rounded-b-md">
        <div className="flex text-black h-10 justify-start items-center">
          <img className="h-6 w-6 m-2" src={NoteLogo} alt="Notes" />
          {title ? (
            <h1>{title}</h1>
          ) : (
            <EditTitle
              onClick={() => setTitle(titleBuffer)}
              title={titleBuffer}
              setTitle={(e) => setTitleBuffer(e.target.value)}
            />
          )}
        </div>
        <div className="text-gray-dark">
          {title && (
            <Editor
              placeholder="Click below to start writing..."
              editorState={editorState}
              onChange={setEditorState}
            />
          )}
        </div>
        <div
          className="transition-all h-10 flex w-full justify-end items-end overflow-hidden"
          ref={saveDivRef}
        >
          <button className="bg-white text-blue rounded pr-2">Save</button>
        </div>
      </div>
    </div>
  );
}

function NotesSection(props) {
  const [notes, setNotes] = useState([
    {
      title: "Lorem",
      note: "How are you planning to edit this thing? Notes toh ban gaye",
    },
    {
      title: "Lorem",
      note: "Cannot edit this directly here 'cause ",
    },
  ]);

  function handleAdd() {
    setNotes([
      ...notes,
      {
        title: "",
        note: "",
        isNew: true,
      },
    ]);
  }

  return (
    <HomePageSection
      title="Notes"
      logo={Reminders}
      show={props.show}
      expand={props.expand}
      onAdd={handleAdd}
    >
      <div className="p-2 overflow-auto">
        {notes.map((note) => (
          <Note note={note} />
        ))}
      </div>
    </HomePageSection>
  );
}

export default NotesSection;
