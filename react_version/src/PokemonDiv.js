import React from "react";
import PokemonAPI from "./PokemonAPI";
import ReactDOM from 'react-dom';

class PokemonDiv extends React.Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        if (this.id == 0) {
            this.className = "elem1";
        } else {
            this.className = "elem";
        }
        this.name = props.name;
        this.url = props.url;
        
    }


    getPokemonInfo = e => {
      const name = this.name;
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      ReactDOM.render(<PokemonAPI name={name} url={url} />, document.getElementById("pinfo"));
    };
  

  render() {
      
    return (
      <div onClick={this.getPokemonInfo} className={this.className} id={this.id}>
        {this.name} {this.id}
      </div>
    );
  }
}

export default PokemonDiv;
