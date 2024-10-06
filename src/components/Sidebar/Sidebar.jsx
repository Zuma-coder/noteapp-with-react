import Button from "../Button/Button";
import "./Sidebar.css";
import PropTypes from "prop-types";

const Sidebar = (props) => {
  const { notes, addNote, deleteNote, currentNote, setCurrentNote } = props;
  const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt);

  const formatDate = (date) => {
    const validDate = typeof date === "string" ? new Date(date) : date;

    const month = String(validDate.getMonth() + 1).padStart(2, "0");
    const day = String(validDate.getDate()).padStart(2, "0");
    const hours = String(validDate.getHours()).padStart(2, "0");
    const minutes = String(validDate.getMinutes()).padStart(2, "0");

    return `${month}/${day} ${hours}:${minutes}`;
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>ノート</h1>
        <Button text="追加" onClick={addNote} />
      </div>
      <div className="sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            key={note.id}
            className={`sidebar-note ${
              currentNote?.id == note.id ? "is-current" : ""
            }`}
            onClick={() => setCurrentNote(note)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <Button text="削除" onClick={() => deleteNote(note.id)} />
            </div>
            <p>{note.text}</p>
            <small>{formatDate(note.updatedAt)}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  notes: PropTypes.array,
  addNote: PropTypes.func,
  deleteNote: PropTypes.func,
  currentNote: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    updatedAt: PropTypes.instanceOf(Date),
  }),
  setCurrentNote: PropTypes.func,
};

export default Sidebar;
