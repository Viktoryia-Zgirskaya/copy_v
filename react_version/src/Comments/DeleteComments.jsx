import React from "react";

class DeleteComments extends React.Component {
  deleteDate = async () => {
    let response = await fetch(`/comments/${this.props.name}/${this.props.comment_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ id: this.props.deleteValue })
    });

    if (response.ok) {
      await response.json();
    } else console.log("error");
  };

  componentDidMount() {
    this.deleteDate();
  }

  render() {
    return <></>;
  }
}

export default DeleteComments;
