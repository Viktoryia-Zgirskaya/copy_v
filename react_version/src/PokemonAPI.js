import React from "react";
import "./App.css";


class PokemonAPI extends React.Component {
    constructor(props) {
        super(props);
        this.url = props.url;
        this.name = props.name;
        this.state = { data: {}, status: false };
    }

    async componentDidMount() {	
      let response = await fetch(this.url);

      if (response.ok) {
        let jsn = await response.json();
        let data = {name: this.name, weight: jsn.weight, height: jsn.height, base_experience: jsn.base_experience}
        this.setState({ data, status: true });
      } 
    }
    render() {
      return "test";
    }

  
}

export default PokemonAPI;
