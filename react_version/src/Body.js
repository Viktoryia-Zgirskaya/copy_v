import React from 'react';
import './App.css';
import PokemonsAPI from './PokemonsAPI' ;

class Body extends React.Component{
    constructor(props){
        super(props)

    }
        
    render(){
        return(
            <div className ="test_d_2">
                <h1>Pokemons</h1>
                <h2 className="elem1">Pokemons List</h2>
                <div className="poInfo"><PokemonsAPI /><div id="pinfo"></div></div>
                
            </div>
        ) 
    }
}

export default Body;