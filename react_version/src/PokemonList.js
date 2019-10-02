import React from "react";
import "./App.css";
import PokemonDiv from './PokemonDiv';



class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.status = props.status;
        this.data = props.data;
    }

    render() {
      if (this.status) {
        return (
            <div id="pList">
                {this.data.map((pokemon_obj, index) => (
                    <PokemonDiv
                        id={index}
                        key={index}
                        name={pokemon_obj.name}
                        url={pokemon_obj.url}
                    />
                    ))}
            </div> 
          );
      } else {
        return (
            <div id="pList"></div> 
        );
      }
    }

}

export default PokemonList;