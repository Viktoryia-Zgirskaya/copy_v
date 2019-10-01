import React from 'react';
import './App.css';
import PokemonsAPI from './PokemonsAPI' ;

function ShowPokemonList(props){
    return props.pokemon_list;
  }

class Body extends React.Component{
    constructor(props){
        super(props)
        this.clicker = false;
        this.myClick = this.myClick.bind(this);

    }

    myClick(){
        let list = document.getElementById("pList");
        if (list) {
            while (list.hasChildNodes()) {  
                list.removeChild(list.firstChild);
              }
        }
        this.clicker = true;
        
    }
    render(){
        if (true) {
            this.clicker = false;
            
            return(
                <div className ="test_d_2">
                    <h1>Pokemons</h1>
                    <h2 className="elem1" onClick={this.myClick}>Get Pokemons</h2>
                    <PokemonsAPI />
                </div>
            )
        } else {
            
            return(
                <div className ="test_d_2">
                    <h1>Pokemons</h1>
                    <h2 className="elem1" onClick={this.myClick}>Get Pokemons</h2>
                </div>
            )
        }
    }
}

export default Body;