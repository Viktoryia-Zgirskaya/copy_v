import React from "react";

class PostComments extends React.Component {
  postDate = async () => {
    let response = await fetch(`/pokemons/comments/${this.props.name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(this.props.data)
    });

    if (response.ok) {
      await response.json();
    } else console.log("error");

    this.props.changeSubmit();
  };

  componentDidMount() {
    this.postDate();
  }

  render() {
    return <></>;
  }
}

export default PostComments;
