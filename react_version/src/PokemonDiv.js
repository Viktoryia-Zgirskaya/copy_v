import React from "react";

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
        this.onClick = props.onClick;
        
    }

  render() {
      
    return (
      <div onClick={this.onClick} className={this.className} id={this.id}>
        {this.name}
      </div>
    );
  }
}

export default PokemonDiv;
