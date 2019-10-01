import React from "react";
import "./App.css";
import PokemonList from './PokemonList';


class PokemonsAPI extends React.Component {
    constructor(props) {
        super(props);
        this.url = "https://pokeapi.co/api/v2/pokemon/";
        this.state = { data: [], status: false };
    }

    async componentDidMount() {	
        alert(this.url);
        let response = await fetch(this.url);
        alert(response.status);
        if (response.ok) {
          let json = await response.json();
          let new_url = this.url + "?limit=" + json.count;
          let new_responce = await fetch(new_url);
          alert(new_responce.status);
          if (new_responce.ok) {
            
            let new_json = await new_responce.json();
            let data = new_json.results;
            
            this.setState({ data: data, status: true });
            console.log(this.state.data);
          } 
        } 
      }

   

    render() {
      return <PokemonList status={this.state.status} data={this.state.data} />;
  }
 
}

export default PokemonsAPI;
