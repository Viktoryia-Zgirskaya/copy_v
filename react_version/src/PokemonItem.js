import React from "react";

class PokemonItem extends React.Component {
  waitClick = e => {
    const name = e.target.className;
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    this.props.onClick(url);
  };

  render() {
    return (
      <li onClick={this.waitClick} className={this.props.item}>
        {this.props.item}
      </li>
    );
  }
}

export default PokemonItem;
