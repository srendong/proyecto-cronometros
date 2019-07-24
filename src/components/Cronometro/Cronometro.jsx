import React, { Component } from "react";

class Cronometro extends Component {
state = {
      editComponent: false,
    running: false,
    time: 0
    }

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
        <form className="textos " onSubmit={this.handlerSave}>
          <h5>{this.props.name}</h5>
          <input
            className={`input1 ${editView}`}
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.handlerChangeName}
          />
          <p>{this.props.project}</p>
          <input
            className={`input1 ${editView}`}
            type="text"
            name="project"
            value={this.props.project}
            onChange={this.props.handlerChangeProject}
          />
        </form>
        <div className="time ">
          <p>{this.hours()}:{this.minutes()}:{this.seconds()}</p>
        </div>
        <div className="botones ">
          <button className={this.state.running ? "startStop red":"startStop green"} onClick={this.handlerStart}>
            {this.state.running ? "stop" : "start"}
          </button>
          <button className="boton" onClick={this.handlerReset}>
            Reset
          </button>
          <button className={`boton ${normalView}`} onClick={this.handlerEdit}>
            Edit
          </button>
          <button className={`boton ${normalView}`} onClick={this.props.clickDelete}>
            Delete
          </button>
          <button className={`botons ${editView}`} onClick={this.handlerSave}>
            save
          </button>
        </div>
      </div>
    );
  }
}

export default Cronometro;
