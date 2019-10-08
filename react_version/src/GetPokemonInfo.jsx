import React from "react";
import "./App.css";
import NewCommentInput from "./NewCommentInput";


class GetPokemonInfo extends React.Component {
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
        // NEW METHOD START !!!!!!
        let new_response = await fetch('/pokemon', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(jsn)
        });
        let result = await new_response.json();
        // NEW METHOD FINISHED !!!!!!
        let data = {id: result.id, name: result.name, weight: jsn.weight, height: jsn.height, base_experience: jsn.base_experience, comments: result.comments}
        this.setState({ data: data, status: true });
      } 
    } 

    async componentDidUpdate(prevProps, prevState, prevContext) {
      if(prevProps.name!== this.props.name) {
       
        let response = await fetch(this.props.url);
  
        if (response.ok) {
          let jsn = await response.json();
          // NEW METHOD START !!!!!!
          let new_response = await fetch('/pokemon', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(jsn)
          });
          let result = await new_response.json();
          // NEW METHOD FINISHED !!!!!!
          let data = {id: result.id, name: result.name, weight: jsn.weight, height: jsn.height, base_experience: jsn.base_experience, comments: result.comments}
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
            <p><NewCommentInput user_id={this.state.data.id}/></p>
            <p>Comments: {this.state.data.comments}</p>
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

export default GetPokemonInfo;
