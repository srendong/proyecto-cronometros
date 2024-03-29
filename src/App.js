import React, { Component } from "react";
import "./scss/App.scss";
import Cronometro from "./components/Cronometro/Cronometro";
import Creator from "./components/Creator/Creator";

class App extends Component {
  state = {
    chronometers: [
      {
        id: new Date().valueOf(),
        name: "Example",
        project: "Project"
      }
    ],
    creatorVisibility: true,
    name: "",
    project: ""
  };

  handlerShowCreator = e => {
    e.preventDefault();
    const oldState = this.state.creatorVisibility;
    this.setState({ creatorVisibility: !oldState });
    this.setState({ name: "", project: "" });
  };

  handlerCreate = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlerAdd = e => {
    e.preventDefault();
    const chronometers = [...this.state.chronometers];
    this.state.name.length === 0 || this.state.project.length === 0
      ? alert("fill the inputs")
      : chronometers.unshift({
          id: new Date().valueOf(),
          name: this.state.name,
          project: this.state.project,
          time: 0
        });
    this.setState({ chronometers });
    this.setState({ name: "", project: "", creatorVisibility: true });
  };

  handlerDelete = id => {
    const chronometerIndex = this.state.chronometers.findIndex(
      chronometer => id === chronometer.id
    );
    const chronometers = [...this.state.chronometers];
    chronometers.splice(chronometerIndex, 1);
    this.setState({ chronometers });
  };

  handlerChangeName = (e, id) => {
    const chronometerIndex = this.state.chronometers.findIndex(
      chronometer => id === chronometer.id
    );
    const chronometer = { ...this.state.chronometers[chronometerIndex] };
    chronometer.name = e.target.value;
    const chronometers = [...this.state.chronometers];
    chronometers[chronometerIndex] = chronometer;
    this.setState({ chronometers });
  };

  handlerChangeProject = (e, id) => {
    const chronometerIndex = this.state.chronometers.findIndex(
      chronometer => id === chronometer.id
    );
    const chronometer = { ...this.state.chronometers[chronometerIndex] };
    chronometer.project = e.target.value;
    const chronometers = [...this.state.chronometers];
    chronometers[chronometerIndex] = chronometer;
    this.setState({ chronometers });
  };

  render() {
    return (
      <div className="contenido">
        <div className="editor fixed-top border ">
          <div className="titulo ">
            <h1>Timers</h1>
          </div>
          <div className="creador ">
            <button
              className="chronometerCreator"
              onClick={this.handlerShowCreator}
            >
              {this.state.creatorVisibility ? "create" : "cancel"}
            </button>
          </div>
        </div>
        <div className="cronometros ">
          {this.state.creatorVisibility ? null : (
            <Creator
              name={this.state.name}
              project={this.state.project}
              change={this.handlerCreate}
              submitCreator={this.handlerAdd}
              cancelCreator={this.handlerShowCreator}
            />
          )}
          {this.state.chronometers.map((chronometer, index) => (
            <Cronometro
              key={chronometer.id}
              name={chronometer.name}
              project={chronometer.project}
              clickDelete={() => this.handlerDelete(chronometer.id)}
              handlerChangeName={e => this.handlerChangeName(e, chronometer.id)}
              handlerChangeProject={e =>
                this.handlerChangeProject(e, chronometer.id)
              }
              clickCancel={this.handlerCancel}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
