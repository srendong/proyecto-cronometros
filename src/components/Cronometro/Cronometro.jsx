import React, { Component } from "react";

class Cronometro extends Component {
  state = {
    editComponent: false,
    time: 0,
    running: true
  };

  handlerStart = () => {
    const oldRunning = this.state.running;
    setInterval(() => {
      this.setState({
        time: this.state.time + 1,
        running: !oldRunning
      });
    }, 1000);
  };
  handlerStop = () => {
    clearInterval(setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000))
      this.setState({
        time: this.state.time,
        running: false
      });
    
  };

  handlerEdit = () => {
    this.setState({ editComponent: true });
  };

  handlerSave = e => {
    e.preventDefault();
    this.setState({ editComponent: false });
  };

  render() {
    const editView = this.state.editComponent ? "" : "invisible";
    const normalView = this.state.editComponent ? "invisible" : "";
    const runningOn = this.state.running ? "" : "invisible";
    const runningOff = this.state.running ? "invisible" : "";
    return (
      <div className="cronometro">
        <form className="textos" onSubmit={this.handlerSave}>
          <h5>{this.props.name}</h5>
          <input
            className={editView}
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.handlerChangeName}
          />
          <p>{this.props.project}</p>
          <input
            className={editView}
            type="text"
            name="project"
            value={this.props.project}
            onChange={this.props.handlerChangeProject}
          />
        </form>
        <div className="time">
          <p>{this.state.time}</p>
        </div>
        <div className="botones">
          <button className={runningOn} onClick={this.handlerStart}>
            Start
          </button>
          <button className={runningOff} onClick={this.handlerStop}>
            stop
          </button>
          <button className={normalView} onClick={this.handlerEdit}>
            Edit
          </button>
          <button className={normalView} onClick={this.props.clickDelete}>
            Delete
          </button>
          <button className={editView} onClick={this.handlerSave}>
            save
          </button>
          <button className={editView} onClick={this.props.clickCancel}>
            cancel
          </button>
        </div>
      </div>
    );
  }
}

export default Cronometro;

// class Cronometro extends React.Component{
//   clickEdit,
//   clickDelete,
//   startStop,
//   name,
//   time,
//   project,
//   inputName,
//   inputProject,
//   startCrono,
//   editCrono,
//   deleteCrono,
//   saveCrono,
//   cancelCrono,
//   clickSave,
//   clickCancel,
//   change
// }) => {
//   return (
//     <div className="cronometro">
//         <div className="textos">
//           <h5>{name}</h5>
//           <input className={inputName} type="text" name="name"   value={name} onChange={change}/>
//           <p>{project}</p>
//           <input className={inputProject} type="text" name="project"   value={project} onChange={change}/>
//         </div>
//       <div className="time">
//         <p>{time}</p>
//       </div>
//       <div className="botones">
//         <button className={startCrono} onClick={startStop}>
//           Start
//         </button>
//         <button className={editCrono} onClick={clickEdit}>
//           Edit
//         </button>
//         <button className={deleteCrono} onClick={clickDelete}>
//           Delete
//         </button>
//         <button className={saveCrono} onClick={clickSave}>
//           save
//         </button>
//         <button className={cancelCrono} onClick={clickCancel}>
//           cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cronometro;
