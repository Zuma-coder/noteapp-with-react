import "./Main.css";
import PropTypes from "prop-types";
import Markdown from "react-markdown";

const Main = (props) => {
  const { note, setTitle, setText } = props;
  return (
    <>
      {note && (
        <div className="main">
          <div className="main-input">
            <input
              type="text"
              value={note.title}
              onChange={(e) => setTitle(note, e.target.value)}
            />
            <textarea
              name=""
              id=""
              placeholder="ここに内容を入力してください"
              value={note.text}
              onChange={(e) => setText(note, e.target.value)}
            ></textarea>
          </div>
          <div className="main-preview">
            <h1>{note.title}</h1>
            <Markdown>{note.text}</Markdown>
          </div>
        </div>
      )}
    </>
  );
};

Main.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    updatedAt: PropTypes.instanceOf(Date),
  }),
  setTitle: PropTypes.func,
  setText: PropTypes.func,
};

export default Main;
