import React, { Component } from 'react';

class Timer extends Component {
    state = { 
        time: "00:00:00"
     }
    render() { 
        return ( 
            <h5 start={this.props.start}>{this.state.time}</h5>
         );
    }
}
 
export default Timer;