import React, { Component } from "react";

class Cronometro extends Component {
  state = {
    editComponent: false,
    running: false,
    time: 0
  };

  seconds = () => {
    return ("0" + (this.state.time % 60)).slice(-2);
  };

  minutes = () => {
    return ("0" + Math.floor(this.state.time / 60)%60).slice(-2);
  };

  hours = () => {
    return ("0" + Math.floor(this.state.time / 3600)).slice(-2);
  };

  handlerStart = () => {
    const oldRunning = this.state.running;
    this.setState({
      running: !oldRunning
    });
    const s = setInterval(() => {
      this.state.running  ? this.setState({time: this.state.time + 1}):clearInterval(s)
    }, 1000);    
  };
  handlerReset = () =>{
    this.setState({time: 0})
  }

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
          <p>
            {this.hours()}:{this.minutes()}:{this.seconds()}
          </p>
        </div>
        <div className="botones">
          <button className="" onClick={this.handlerStart}>
            {this.state.running ? "stop" : "start"}
          </button>
          <button className="" onClick={this.handlerReset}>
            Reset
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
