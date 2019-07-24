import React, { Component } from "react";

class Creator extends Component {
  componentDidMount(){
    this.nameInput.focus();
  }
  render() {
    return (
      <div className="creator">
        <form className="form" onSubmit={this.props.submitCreator}>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              className="entrada"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={this.props.name}
              onChange={this.props.change}
              ref={(input) => { this.nameInput = input; }}
            />
          </div>
          <div className="name">
            <label htmlFor="project">Project</label>
            <input
              className="entrada"
              type="text"
              id="project"
              name="project"
              placeholder="Project"
              velue={this.props.project}
              onChange={this.props.change}
            />
          </div>
          <div className="botones">
            <button className="boton" onClick={this.props.submitCreator}>
              create
            </button>
            <button className="boton" onClick={this.props.cancelCreator}>
              cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Creator;

// const Creator = ({ submitCreator, name, project , cancelCreator, change}) => {

//   return (
//     <div className="creator">
//       <form  className="form" onSubmit={submitCreator}>
//         <div className="name">
//           <label htmlFor="name">Name</label>
//           <input className="entrada" type="text" id="name" name="name"  placeholder="   Name" value={name} onChange={change} />
//         </div>
//         <div className="name">
//         <label htmlFor="project">Project</label>
//         <input className="entrada" type="text" id="project" name="project" placeholder="   Project" velue={project} onChange={change} />
//         </div>
//         <div className="botones">
//           <button className="boton" onClick={submitCreator}>create</button>
//           <button className="boton" onClick={cancelCreator}>cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Creator;
