import React from "react";
import "./App.css";
import PokemonDiv from './PokemonDiv';


function addPokemonToMenu(item, index) {
    var divTag = document.createElement("div");
        divTag.setAttribute('id', index+1);
        if (index == 0) {
            divTag.setAttribute('class', "elem1");
        } else {
            divTag.setAttribute('class', "elem");
        }
            divTag.textContent= item.name;
        divTag.setAttribute('onclick', 'check(this.id)');
            document.getElementById("pList").appendChild(divTag);
        }


class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.status = props.status;
        this.data = props.data;
    }

    
    getPokemonInfo = id => {
        alert(this.data[id]);
      };
    

    render() {
      if (this.status) {
        return (
            <div id="pList">
                {this.data.map((value, index) => (
                    <PokemonDiv
                        id={index}
                        name={value.name}
                        url={value.url}
                        onClick={this.getPokemonInfo}
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