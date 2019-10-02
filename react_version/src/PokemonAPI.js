import React from "react";
import "./App.css";


class PokemonAPI extends React.Component {
    constructor(props) {
        super(props);
        this.url = props.url;
        this.name = props.name;
        this.state = { data: {}, status: false };
        this.className = "elem-info";
    }

     async componentDidMount() {	
      let response = await fetch(this.url);

      if (response.ok) {
        let jsn = await response.json();
        let data = {name: this.name, weight: jsn.weight, height: jsn.height, base_experience: jsn.base_experience}
        this.setState({ data: data, status: true });
      } 
    } 

    async componentDidUpdate(prevProps, prevState, prevContext) {
      if(prevProps.name!== this.props.name) {
       
        let response = await fetch(this.props.url);
  
        if (response.ok) {
          let jsn = await response.json();
          let data = {name: jsn.name, weight: jsn.weight, height: jsn.height, base_experience: jsn.base_experience}
          this.setState({ data: data });
        } 
      }
      
    }






    render() {
      if (this.state.status) {
        return (
          <div className={this.className}>
            <p>Name: {this.state.data.name}</p>
            <p>Weight: {this.state.data.weight}</p>
            <p>Height: {this.state.data.height}</p>
            <p>BE: {this.state.data.base_experience}</p>
          </div>
        );
      } else {
        return (
          <div className={this.className}>
            <p>Please Wait</p>
          </div>
        )
      }
    }
    

  
}

export default PokemonAPI;
