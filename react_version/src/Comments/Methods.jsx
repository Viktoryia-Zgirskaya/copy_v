import React from "react";
import GetComments from "./GetComments";
import PostComments from "./PostComments";
import DeleteComments from "./DeleteComments";
import PutComments from "./PutComments"; 

class Methods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteValue: "",
      delete: false,
      updateValue: "",
      update: false
    };
  }

  changeDelete = () => {
    this.setState({ delete: false });
  };

  changeUpdate = () => {
    this.setState({ update: false });
  };

  getId = id => {
    this.props.getId(id);
  };

  onClickDelete = deleteValue => {
    this.setState({ deleteValue, delete: true });
    setTimeout(this.changeDelete, 0);
  };

  onClickUpdate = updateValue => {
    this.setState({ updateValue, update: true });
    this.props.updateValue(updateValue);
    setTimeout(this.changeUpdate, 0);
  };

  update = () => {
    if (!this.state.delete && !this.props.submit) {
      return true;
    }
  };

  render() {
    return (
      <>
        {this.update() && (
          <GetComments
            name={this.props.name}
            getId={this.getId}
            onClickDelete={this.onClickDelete}
            onClickUpdate={this.onClickUpdate}
            saveData={this.props.saveData}
          />
        )}
        {this.props.submit && (
          <PostComments
            data={this.props.data}
            name={this.props.name}
            changeSubmit={this.props.changeSubmit}
          />
        )}
        {this.state.delete && (
          <DeleteComments
            name={this.props.name}
            comment_id={this.props.comment_id}
            deleteValue={this.state.deleteValue}
          />
        )}
        {this.state.update && (
          <PutComments
            name={this.props.name}
            updateValue={this.state.updateValue}
          />
        )}
      </>
    );
  }
}

export default Methods;
