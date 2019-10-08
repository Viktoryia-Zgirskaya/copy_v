import React from "react";
import Detail from "./CurrentPokemon/Detail";
import List from "./List/List";
import FormContainer from "./Comments/FormContainer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", users: [] };
  }

  getClickName = name => {
    this.setState({ name });
  };

  render() {
    return (
      <div className="App">
        <List name={this.state.name} getClickName={this.getClickName} />
        {this.state.name && (
          <>
            <Detail name={this.state.name} />
            <FormContainer name={this.state.name} />
          </>
        )}
      </div>
    );
  }
}

export default App;
