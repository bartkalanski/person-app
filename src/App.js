import React, { Component } from "react";
import PersonList from "./PersonList";

class App extends Component {
  state = { people: [] };
  render() {
    return (
      <div>
        <div className="App"></div>
        <PersonList people={this.state.people} />
      </div>
    );
  }
}

export default App;
