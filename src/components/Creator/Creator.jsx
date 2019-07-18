import React from "react";

const Creator = ({ submitCreator, name, project , cancelCreator, change}) => {
  return (
    <div className="creator">
      <form  className="form" onSubmit={submitCreator}>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input className="entrada" type="text" id="name" name="name"  placeholder="   Name" value={name} onChange={change} />
        </div>
        <div className="name">
        <label htmlFor="project">Project</label>
        <input className="entrada" type="text" id="project" name="project" placeholder="   Project" velue={project} onChange={change} />
        </div>
        <div className="botones">
          <button className="boton" onClick={submitCreator}>create</button>
          <button className="boton" onClick={cancelCreator}>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Creator;
