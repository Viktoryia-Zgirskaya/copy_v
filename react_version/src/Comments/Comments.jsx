import React from "react";

class Comments extends React.Component {
  handleClickDelete = e => {
    this.props.onClickDelete(e.target.id);
  };

  handleClickUpdate = e => {
    this.props.onClickUpdate(e.target.id);
  };

  render() {
    const data = this.props.data;
    return (
      data &&
      data.map((item, index) => (
        <div key={item + index} className="comments">
          <div className="up_container">
            <p className="user">{item.user}</p>
            <p className="date">{item.date}</p>
          </div>
          <p className="user_comment">{item.comment}</p>
          <button id={item.id} onClick={this.handleClickDelete}>
            delete
          </button>
          <button id={item.id} onClick={this.handleClickUpdate}>
            update
          </button>
        </div>
      ))
    );
  }
}

export default Comments;
