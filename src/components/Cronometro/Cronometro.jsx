import React from "react";

const Cronometro = ({
  clickEdit,
  clickDelete,
  startStop,
  name,
  time,
  project
}) => {
  return (
    <div className="cronometro">
        <div className="textos">
          <h5>{name}</h5>
          <p>{project}</p>
        </div>
      <div className="time">
        <p>{time}</p>
      </div>
      <div className="botones">
        <button className="start" onClick={startStop}>
          Start
        </button>
        <button className="edit" onClick={clickEdit}>
          Edit
        </button>
        <button className="delete" onClick={clickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Cronometro;
