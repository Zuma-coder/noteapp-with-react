import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNote, setCurrentNote] = useState(notes[0]);

  // ローカルストレージにデータを保存
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "新しいノート",
      text: "",
      updatedAt: new Date(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    currentNote.id === id && setCurrentNote({});
  };

  const setTitle = (targetNote, newValue) => {
    setNotes(
      notes.map((note) => {
        return note.id === targetNote.id
          ? { ...note, title: newValue, updatedAt: new Date() }
          : note;
      })
    );
  };

  const setText = (targetNote, newValue) => {
    setNotes(
      notes.map((note) => {
        return note.id === targetNote.id
          ? { ...note, text: newValue, updatedAt: new Date() }
          : note;
      })
    );
  };

  return (
    <>
      <div className="App">
        <Sidebar
          notes={notes}
          addNote={addNote}
          deleteNote={deleteNote}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
        />
        <Main
          note={notes.find((note) => note.id === currentNote?.id)}
          setTitle={setTitle}
          setText={setText}
        />
      </div>
    </>
  );
}

export default App;
