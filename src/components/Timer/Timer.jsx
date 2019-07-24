import React, { Component } from "react";

class Timer extends Component {
  state = {
    running: false,
    time: 0
  };

  seconds = () => {
    return ("0" + (this.state.time % 60)).slice(-2);
  };

  minutes = () => {
    return ("0" + (Math.floor(this.state.time / 60) % 60)).slice(-2);
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

  render() {
    return (
      <div>
        <h5>
          {this.hours()}:{this.minutes()}:{this.seconds()}
        </h5>
        <button className="" onClick={this.handlerStart}>
          {this.state.running ? "stop" : "start"}
        </button>
        <button className="" onClick={this.handlerReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Timer;
