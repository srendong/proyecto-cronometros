import React, { Component } from "react";
import "./scss/App.scss";
import Cronometro from "./components/Cronometro/Cronometro";
import Creator from "./components/Creator/Creator";

class App extends Component {
  state = {
    cronometers: [{ name: "Example", project: "Project", time: "0:00:00" }],
    creatorVisibility: true,
    name: "",
    project: "",
    time: "00:00:00"
  };

  handlerStartSop = () => {};

  handlerDelete = index => {
    const cronometers = [...this.state.cronometers];
    cronometers.splice(index, 1);
    this.setState({ cronometers });
  };
  handlerCreate = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handlerEdit = () => {};

  handlerRestart = () => {};

  handlerAdd = e => {
    e.preventDefault();
    const cronometers = [ ...this.state.cronometers ];
    cronometers.unshift( {name:this.state.name , project:this.state.project, time:this.state.time });
    this.setState({ cronometers });
    this.setState({name:"", project:"",creatorVisibility: true})
  };

  handlerShowCreator = (e) => {
    e.preventDefault()
    const oldState = this.state.creatorVisibility
    this.setState({ creatorVisibility: ! oldState });
    this.setState({name:"", project:""})
  };

  render() {
    return (
      <div className="contenido">
        <div className="titulo">
          <h1>Cronometros</h1>
        </div>
        <div className="cronometros ">
          {this.state.cronometers.map((cronometer, index) => (
            <Cronometro
              key={index}
              name={cronometer.name}
              project={cronometer.project}
              time={cronometer.time}
              clickDelete={() => this.handlerDelete(index)}
            />
          ))}
        </div>
        <div className="editor">
          <button className="cronometerCreator" onClick={this.handlerShowCreator}>Create</button>
          {this.state.creatorVisibility  ? null : <Creator 
            name={this.state.name}
            project={this.state.project}
            change={this.handlerCreate}
            submitCreator={this.handlerAdd}
            cancelCreator={this.handlerShowCreator}
          /> }
        </div>
      </div>
    );
  }
}

export default App;
